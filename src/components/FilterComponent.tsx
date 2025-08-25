import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button, Row, Col, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './FilterComponent.css';

interface FilterOption {
  label: string;
  value: string;
  isMultiSelect?: boolean;
}

interface DropdownItem {
  label: string;
  value: string;
}

interface FilterComponentProps {
  visible?: boolean;
  onFilter?: (filters: Record<string, string[]>) => void;
  onCancel?: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ visible = true, onFilter, onCancel }) => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [isModalVisible, setIsModalVisible] = useState(visible);

  const filterOptions: FilterOption[] = [
    { label: 'Employee Type', value: 'employeeType', isMultiSelect: true },
    { label: 'Employment Status', value: 'employmentStatus', isMultiSelect: true },
    { label: 'Designation', value: 'designation', isMultiSelect: true },
    { label: 'Division', value: 'division', isMultiSelect: true },
    { label: 'Department', value: 'department', isMultiSelect: true },
    { label: 'Sub Department', value: 'subDepartment', isMultiSelect: true },
    { label: 'Vertical', value: 'vertical', isMultiSelect: true },
    { label: 'Project', value: 'project', isMultiSelect: true },
    { label: 'Sites', value: 'sites', isMultiSelect: true },
    { label: 'Offices', value: 'offices', isMultiSelect: true },
    { label: 'Contract Types', value: 'contractTypes', isMultiSelect: true },
    { label: 'Gender', value: 'gender', isMultiSelect: false },
  ];

  // Sample dropdown items for each filter option
  const getDropdownItems = (optionValue: string): DropdownItem[] => {
    const commonItems = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
      { label: 'Option 5', value: 'option5' },
    ];
    
    if (optionValue === 'gender') {
      return [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ];
    }
    
    return commonItems;
  };
  
  const handleSelectChange = (optionValue: string, selectedValues: string | string[]) => {
    const option = filterOptions.find(opt => opt.value === optionValue);
    
    if (option?.isMultiSelect) {
      setFilters(prev => ({
        ...prev,
        [optionValue]: Array.isArray(selectedValues) ? selectedValues : [selectedValues]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [optionValue]: typeof selectedValues === 'string' ? [selectedValues] : selectedValues
      }));
    }
  };

  const handleFilter = () => {
    if (onFilter) {
      onFilter(filters);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setFilters({});
    setIsModalVisible(false);
    if (onCancel) {
      onCancel();
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    if (onCancel) {
      onCancel();
    }
  };

  // Update modal visibility when visible prop changes
  useEffect(() => {
    setIsModalVisible(visible);
  }, [visible]);

  return (
    <Modal
      title="Filter"
      open={isModalVisible}
      onCancel={handleModalClose}
      footer={null}
      width={700}
      centered
      className="filter-modal"
    >
      <div style={{ padding: '20px 0' }}>
        <Row gutter={[20, 16]}>
          {filterOptions.map((option) => (
            <Col span={12} key={option.value}>
              <div style={{ marginBottom: '8px' }}>
                <label style={{ 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '4px',
                  display: 'block'
                }}>
                  {option.label}
                  {option.isMultiSelect && (
                    <span style={{ 
                      color: '#999', 
                      fontSize: '12px', 
                      fontWeight: 'normal' 
                    }}> (Multi Select)</span>
                  )}
                </label>
              </div>
              <Select
                mode={option.isMultiSelect ? 'multiple' : undefined}
                placeholder={`Select ${option.label}`}
                style={{ width: '100%' }}
                value={filters[option.value]}
                onChange={(value) => handleSelectChange(option.value, value)}
                allowClear
                showSearch={option.isMultiSelect}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={getDropdownItems(option.value).map(item => ({
                  label: item.label,
                  value: item.value
                }))}
                maxTagCount="responsive"
              />
            </Col>
          ))}
        </Row>
        
        <div style={{ 
          marginTop: '30px', 
          paddingTop: '20px', 
          borderTop: '1px solid #f0f0f0',
          textAlign: 'right'
        }}>
          <Space>
            <Button onClick={handleCancel} size="large">
              Cancel
            </Button>
            <Button 
              type="primary" 
              onClick={handleFilter}
              size="large"
              icon={<SearchOutlined />}
            >
              Filter
            </Button>
          </Space>
        </div>
      </div>
    </Modal>
  );
};

export default FilterComponent;
