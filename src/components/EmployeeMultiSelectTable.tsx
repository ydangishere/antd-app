import React, { useState } from 'react';
import { Table, Button, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './EmployeeMultiSelectTable.css';

interface EmployeeData {
  key: string;
  photo: string;
  employeeId: string;
  completeName: string;
  gearincEmail: string;
  designation: string;
  division: string;
  department: string;
  project: string;
  country: string;
  site: string;
}

const EmployeeMultiSelectTable: React.FC = () => {
  // State for multi-select mode
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  // State for selected rows
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Toggle multi-select mode
  const toggleMultiSelectMode = () => {
    setMultiSelectMode(!multiSelectMode);
    // Clear selections when toggling off
    if (multiSelectMode) {
      setSelectedRowKeys([]);
    }
  };

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    }
  };

  // Sample data
  const data: EmployeeData[] = Array(19).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    employeeId: 'EMP12345',
    completeName: 'Lorem Ipsum Semper',
    gearincEmail: 'Lorem Ipsum Semper',
    designation: 'Lorem Ipsum Semper',
    division: 'Lorem Ipsum Semper',
    department: 'Lorem Ipsum Semper',
    project: 'Lorem Ipsum Semper',
    country: 'Lorem Ipsum Semper',
    site: 'Lorem Ipsum Semper',
  }));

  // Define columns
  const columns: ColumnsType<EmployeeData> = [
    {
      title: 'Photo',
      dataIndex: 'photo',
      key: 'photo',
      width: 100,
      render: (photo: string) => (
        <Avatar src={photo} size={32} />
      ),
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
      sorter: (a, b) => a.employeeId.localeCompare(b.employeeId),
    },
    {
      title: 'Complete name',
      dataIndex: 'completeName',
      key: 'completeName',
      sorter: (a, b) => a.completeName.localeCompare(b.completeName),
    },
    {
      title: 'Gearinc email',
      dataIndex: 'gearincEmail',
      key: 'gearincEmail',
      sorter: (a, b) => a.gearincEmail.localeCompare(b.gearincEmail),
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
      sorter: (a, b) => a.designation.localeCompare(b.designation),
    },
    {
      title: 'Division',
      dataIndex: 'division',
      key: 'division',
      sorter: (a, b) => a.division.localeCompare(b.division),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      sorter: (a, b) => a.project.localeCompare(b.project),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
      title: 'Site',
      dataIndex: 'site',
      key: 'site',
      sorter: (a, b) => a.site.localeCompare(b.site),
    },
  ];

  return (
    <div className="employee-table-container">
      <div className="table-topbar">
        <Button 
          className={`multi-select-button ${multiSelectMode ? 'active' : ''}`}
          onClick={toggleMultiSelectMode}
          style={{
            padding: '4px 12px',
            fontSize: '13px',
            borderRadius: '2px',
            fontWeight: 400
          }}
        >
          Multi Select
        </Button>
      </div>
      
      <Table
        rowSelection={multiSelectMode ? rowSelection : undefined}
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        className="employee-data-table"
        rowClassName="employee-table-row"
      />
    </div>
  );
};

export default EmployeeMultiSelectTable;
