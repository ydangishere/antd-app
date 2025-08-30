import React, { useState, useEffect } from 'react';
import { Table, Typography, Space, Button, Popover, Modal, Form, Input, Select, App } from 'antd';
import { RightOutlined, DownOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import './OrgStructureTable.css';

// Node types
type NodeType = 'division' | 'department' | 'subDepartment' | 'subDepartment2';

interface Node {
  id: string;
  type: NodeType;
  name: string;
  unitLeader?: string;
  children?: Node[];
}

// Form types
interface FormValues {
  name: string;
  unitLeader: string;
}

const { Text, Link } = Typography;

// Props for the component
interface OrgStructureTableProps {
  initialData?: Node[];
  onChange?: (data: Node[]) => void;
}

const OrgStructureTable: React.FC<OrgStructureTableProps> = ({ 
  initialData = [], 
  onChange 
}) => {
  const [data, setData] = useState<Node[]>(initialData);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [sortedInfo, setSortedInfo] = useState<any>({});
  const [editingNode, setEditingNode] = useState<Node | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [addingNodeInfo, setAddingNodeInfo] = useState<{ parentId?: string; type: NodeType } | null>(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [tableKey, setTableKey] = useState<number>(0); // Add key to force table re-render
  const [form] = Form.useForm();
  const { message } = App.useApp();

  // Update parent component when data changes
  useEffect(() => {
    if (onChange) {
      onChange(data);
    }
  }, [data, onChange]);

  // Helper function to check if a node has children
  const hasChildren = (node: Node): boolean => {
    return (node.children?.length ?? 0) > 0;
  };

  // Helper function to check if a node is a leaf
  const isLeaf = (node: Node): boolean => {
    return node.type === 'subDepartment2' || !hasChildren(node);
  };

  // Handle table change (for sorting)
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setSortedInfo(sorter);
  };

  // Toggle expand/collapse
  const toggleExpand = (expanded: boolean, record: Node) => {
    const newExpandedKeys = new Set(expandedKeys);
    if (expanded) {
      newExpandedKeys.add(record.id);
    } else {
      newExpandedKeys.delete(record.id);
    }
    setExpandedKeys(newExpandedKeys);
  };

  // Custom expand icon
  const customExpandIcon = (props: any) => {
    const { expanded, onExpand, record } = props;
    
    // Don't show any icon for add rows
    if (record.__isAddRow) {
      return null;
    }
    
    const canExpand = hasChildren(record);
    const isExpandable = canExpand && !isLeaf(record);
    
    if (isExpandable) {
      return expanded ? (
        <DownOutlined 
          className="caret-icon caret-green"
          onClick={(e) => onExpand(record, e)}
          aria-expanded={expanded}
        />
      ) : (
        <RightOutlined 
          className="caret-icon caret-green"
          onClick={(e) => onExpand(record, e)}
          aria-expanded={expanded}
        />
      );
    } else {
      return (
        <RightOutlined 
          className="caret-icon caret-gray"
          aria-disabled="true"
        />
      );
    }
  };

  // Open edit modal
  const handleEdit = (node: Node) => {
    setEditingNode(node);
    form.setFieldsValue({
      name: node.name,
      unitLeader: node.unitLeader || '',
    });
    setIsEditModalVisible(true);
  };

  // Handle edit form submission
  const handleEditSubmit = () => {
    form.validateFields().then((values: FormValues) => {
      if (editingNode) {
        const newData = updateNodeInTree(data, editingNode.id, {
          ...editingNode,
          name: values.name,
          unitLeader: values.unitLeader,
        });
        setData(newData);
        setIsEditModalVisible(false);
        message.success('Item updated successfully');
      }
    });
  };

  // Open delete confirmation
  const handleDelete = (node: Node) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      content: `This will delete "${node.name}" ${hasChildren(node) ? 'and all its children' : ''}.`,
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => {
        try {
          // Deep clone the data array to ensure immutability
          const clonedData = JSON.parse(JSON.stringify(data));
          
          // Delete the node from the cloned data
          const newData = deleteNodeFromTree(clonedData, node.id);
          
          // Update the state with the new data
          setData(newData);
          
          // Force a complete re-render of the table
          setTableKey(prev => prev + 1);
          
          message.success('Item deleted successfully');
        } catch (error) {
          console.error('Error deleting item:', error);
          message.error('Failed to delete item');
        }
      },
    });
  };

  // Open add modal
  const handleAdd = (parentId: string | undefined, type: NodeType) => {
    setAddingNodeInfo({ parentId, type });
    form.resetFields();
    setIsAddModalVisible(true);
  };

  // Handle add form submission
  const handleAddSubmit = () => {
    form.validateFields().then((values: FormValues) => {
      if (addingNodeInfo) {
        const newNode: Node = {
          id: `${addingNodeInfo.type}-${Date.now()}`,
          type: addingNodeInfo.type,
          name: values.name,
          unitLeader: values.unitLeader,
          children: [],
        };

        let newData: Node[];
        if (addingNodeInfo.parentId) {
          // Add as a sibling at the same level, not as a child
          // Find the parent node
          const parentNode = findNodeById(data, addingNodeInfo.parentId);
          
          if (parentNode) {
            // If we found the parent, add the new node to the same parent's parent
            const parentOfParent = findParentNode(data, addingNodeInfo.parentId);
            
            if (parentOfParent) {
              // Add as sibling to the parent node
              newData = addSiblingNode(data, addingNodeInfo.parentId, newNode);
            } else {
              // Parent is at root level, add to root
              newData = [...data, newNode];
            }
          } else {
            // Fallback - add as a child of the parent
            newData = addNodeToParent(data, addingNodeInfo.parentId, newNode);
          }
          
          // Ensure parent is expanded if needed
          setExpandedKeys(prev => new Set([...prev, addingNodeInfo.parentId!]));
        } else {
          // For root level additions, find the last node of the same type
          // This is for "Add Division" case
          const lastNodeOfSameTypeIndex = [...data].reverse().findIndex(n => n.type === addingNodeInfo.type);
          
          if (lastNodeOfSameTypeIndex !== -1) {
            // Calculate the actual index in the original array
            const actualIndex = data.length - 1 - lastNodeOfSameTypeIndex;
            // Insert after the last node of the same type
            const newDataArray = [...data];
            newDataArray.splice(actualIndex + 1, 0, newNode);
            newData = newDataArray;
          } else {
            // If no node of the same type exists, add to the end
            newData = [...data, newNode];
          }
        }

        // Force a re-render of the table
        setData(newData);
        setTableKey(prev => prev + 1);
        setIsAddModalVisible(false);
        message.success('Item added successfully');
      }
    });
  };

  // Helper function to update a node in the tree
  const updateNodeInTree = (nodes: Node[], id: string, updatedNode: Node): Node[] => {
    return nodes.map(node => {
      if (node.id === id) {
        return { ...updatedNode };
      }
      if (node.children) {
        return {
          ...node,
          children: updateNodeInTree(node.children, id, updatedNode),
        };
      }
      return node;
    });
  };

  // Helper function to delete a node from the tree
  const deleteNodeFromTree = (nodes: Node[], id: string): Node[] => {
    const result = nodes.filter(node => {
      if (node.id === id) {
        return false;
      }
      if (node.children && node.children.length > 0) {
        const filteredChildren = deleteNodeFromTree(node.children, id);
        node.children = filteredChildren;
      }
      return true;
    });
    
    // Force a re-render by creating a new array
    return [...result];
  };

  // Helper function to find a node by ID
  const findNodeById = (nodes: Node[], id: string): Node | null => {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const found = findNodeById(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Helper function to find a parent node by child ID
  const findParentNode = (nodes: Node[], childId: string, parent: Node | null = null): Node | null => {
    for (const node of nodes) {
      if (node.id === childId) {
        return parent;
      }
      if (node.children && node.children.length > 0) {
        const found = findParentNode(node.children, childId, node);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Helper function to add a node as a sibling to another node
  const addSiblingNode = (nodes: Node[], siblingId: string, newNode: Node): Node[] => {
    const result = [...nodes];
    
    // Find the parent node
    const parent = findParentNode(nodes, siblingId);
    
    if (parent) {
      // Add the new node as a sibling
      const parentIndex = result.findIndex(node => node.id === parent.id);
      if (parentIndex !== -1) {
        // Find the index of the sibling within the parent's children
        const siblings = result[parentIndex].children || [];
        const siblingIndex = siblings.findIndex(node => node.id === siblingId);
        
        if (siblingIndex !== -1) {
          // Insert the new node right after the sibling
          const newChildren = [...siblings];
          newChildren.splice(siblingIndex + 1, 0, newNode);
          
          result[parentIndex] = {
            ...result[parentIndex],
            children: newChildren,
          };
        } else {
          // Fallback: add to the end of parent's children
          result[parentIndex] = {
            ...result[parentIndex],
            children: [...siblings, newNode],
          };
        }
      }
      return result;
    }
    
    // If no parent found, try to insert after the sibling at root level
    const siblingIndex = result.findIndex(node => node.id === siblingId);
    if (siblingIndex !== -1) {
      // Insert right after the sibling
      const newResult = [...result];
      newResult.splice(siblingIndex + 1, 0, newNode);
      return newResult;
    }
    
    // Fallback: add to the end
    return [...nodes, newNode];
  };

  // Helper function to add a node to a parent
  const addNodeToParent = (nodes: Node[], parentId: string, newNode: Node): Node[] => {
    return nodes.map(node => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [...(node.children || []), newNode],
        };
      }
      if (node.children) {
        return {
          ...node,
          children: addNodeToParent(node.children, parentId, newNode),
        };
      }
      return node;
    });
  };

  // Get level-specific add text
  const getAddText = (type: NodeType): string => {
    switch (type) {
      case 'division':
        return 'Add Division';
      case 'department':
        return 'Add Department';
      case 'subDepartment':
        return 'Add Sub Department';
      case 'subDepartment2':
        return 'Add Sub Department 2';
    }
  };

  // Get next level type
  const getChildType = (type: NodeType): NodeType => {
    switch (type) {
      case 'division':
        return 'department';
      case 'department':
        return 'subDepartment';
      case 'subDepartment':
        return 'subDepartment2';
      default:
        return 'subDepartment2';
    }
  };

  // Render the "Add" row for a given level
  const renderAddRow = (parentId: string | undefined, type: NodeType) => {
    return {
      id: `add-${parentId || 'root'}-${type}`,
      name: (
        <div className="add-row-no-arrow">
          <Link onClick={() => handleAdd(parentId, type)}>
            {getAddText(type)}
          </Link>
        </div>
      ),
      unitLeader: '',
      type,
      __isAddRow: true,
    };
  };

  // Group nodes by type for organizing "Add" rows
  const groupNodesByType = (nodes: Node[]): Record<string, Node[]> => {
    const groups: Record<string, Node[]> = {};
    
    for (const node of nodes) {
      if (!groups[node.type]) {
        groups[node.type] = [];
      }
      groups[node.type].push(node);
    }
    
    return groups;
  };

  // Process data to include "Add" rows
  const processDataWithAddRows = (nodes: Node[], parentId?: string): any[] => {
    if (!nodes.length) {
      // If empty, just return the add row for this level
      return parentId ? [renderAddRow(parentId, 'division')] : [];
    }
    
    // Group nodes by type
    const nodesByType = groupNodesByType(nodes);
    
    // Process each group and add the "Add" row after the last node of each type
    const result: any[] = [];
    
    // Process each node and add to result
    for (const node of nodes) {
      // Add the current node
      const processedNode = (() => {
        if (node.__isAddRow) return node;
        
        if (node.children && node.children.length > 0) {
          return {
            ...node,
            children: processDataWithAddRows(node.children, node.id),
          };
        }
        
        // For leaf nodes that can have children, add an empty "Add" row of the SAME type
        if (node.type !== 'subDepartment2') {
          return {
            ...node,
            children: [renderAddRow(node.id, node.type)],
          };
        }
        
        return node;
      })();
      
      result.push(processedNode);
      
      // Add the "Add" row after the last node of each type
      const nodesOfThisType = nodesByType[node.type] || [];
      if (nodesOfThisType[nodesOfThisType.length - 1]?.id === node.id) {
        // This is the last node of its type, add the "Add" row after it
        result.push(renderAddRow(parentId, node.type));
      }
    }
    
    return result;
  };

  // Define table columns
  const columns: ColumnsType<Node> = [
    {
      title: 'Division',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        // Skip sorting for add rows
        if (a.__isAddRow || b.__isAddRow) return 0;
        return a.name.localeCompare(b.name);
      },
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      render: (text, record) => {
        if (record.__isAddRow) {
          return text;
        }
        return (
          <Text type="link">{record.name}</Text>
        );
      },
    },
    {
      title: 'Unit Leader',
      dataIndex: 'unitLeader',
      key: 'unitLeader',
      sorter: (a, b) => {
        // Skip sorting for add rows
        if (a.__isAddRow || b.__isAddRow) return 0;
        return (a.unitLeader || '').localeCompare(b.unitLeader || '');
      },
      sortOrder: sortedInfo.columnKey === 'unitLeader' ? sortedInfo.order : null,
    },
    {
      title: 'Action(s)',
      key: 'actions',
      render: (_, record) => {
        if (record.__isAddRow) {
          return null;
        }
        return (
          <Space size="middle" className="action-buttons">
            <Button 
              type="link" 
              icon={<EditOutlined />} 
              onClick={() => handleEdit(record)}
            >
              Edit
            </Button>
            <Button 
              type="link" 
              icon={<DeleteOutlined />} 
              onClick={() => handleDelete(record)}
              danger
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  // Get row class name based on node type
  const getRowClassName = (record: any) => {
    if (record.__isAddRow) {
      return `add-row-${record.type} add-row-custom`;
    }
    
    switch (record.type) {
      case 'division':
        return 'row-division';
      case 'department':
        return 'row-department';
      case 'subDepartment':
        return 'row-sub-department';
      case 'subDepartment2':
        return 'row-sub-department-2';
      default:
        return '';
    }
  };

  // Prepare data with add rows
  const tableData = processDataWithAddRows(data);

  return (
    <div className="org-structure-table">
      <Table
        key={tableKey} // Add key to force complete re-render
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        pagination={false}
        expandable={{
          expandIcon: customExpandIcon,
          expandedRowKeys: Array.from(expandedKeys),
          onExpand: toggleExpand,
        }}
        onChange={handleTableChange}
        rowClassName={getRowClassName}
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Item"
        open={isEditModalVisible}
        onOk={handleEditSubmit}
        onCancel={() => setIsEditModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="unitLeader"
            label="Unit Leader"
          >
            <Select
              showSearch
              placeholder="Select a unit leader"
              optionFilterProp="children"
              allowClear
            >
              <Select.Option value="Lorem Ipsum Semper">Lorem Ipsum Semper</Select.Option>
              <Select.Option value="John Doe">John Doe</Select.Option>
              <Select.Option value="Jane Smith">Jane Smith</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Modal */}
      <Modal
        title={addingNodeInfo ? `Add ${addingNodeInfo.type.charAt(0).toUpperCase() + addingNodeInfo.type.slice(1)}` : 'Add Item'}
        open={isAddModalVisible}
        onOk={handleAddSubmit}
        onCancel={() => setIsAddModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="unitLeader"
            label="Unit Leader"
          >
            <Select
              showSearch
              placeholder="Select a unit leader"
              optionFilterProp="children"
              allowClear
            >
              <Select.Option value="Lorem Ipsum Semper">Lorem Ipsum Semper</Select.Option>
              <Select.Option value="John Doe">John Doe</Select.Option>
              <Select.Option value="Jane Smith">Jane Smith</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default OrgStructureTable;
