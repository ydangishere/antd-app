import React, { useState } from 'react';
import { Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import './EmployeeTableNew.css';

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

const EmployeeTableNew: React.FC = () => {
  // Removed sorting state and handler

  // Custom render for column titles to ensure no arrows
  const renderColumnTitle = (title: string) => {
    return <span className="custom-column-title">{title}</span>;
  };

  const columns: ColumnsType<EmployeeData> = [
    {
      title: renderColumnTitle("Photo"),
      dataIndex: 'photo',
      key: 'photo',
      width: 111,
      render: (photo: string) => (
        <Avatar 
          src={photo} 
          size={32}
          className="employee-photo"
        />
      ),
    },
    {
      title: renderColumnTitle("Employee ID"),
      dataIndex: 'employeeId',
      key: 'employeeId',
      width: 161,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Complete name"),
      dataIndex: 'completeName',
      key: 'completeName',
      width: 205,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Gearinc email"),
      dataIndex: 'gearincEmail',
      key: 'gearincEmail',
      width: 189,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Designation"),
      dataIndex: 'designation',
      key: 'designation',
      width: 175,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Division"),
      dataIndex: 'division',
      key: 'division',
      width: 161,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Department"),
      dataIndex: 'department',
      key: 'department',
      width: 165,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Project"),
      dataIndex: 'project',
      key: 'project',
      width: 177,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Country"),
      dataIndex: 'country',
      key: 'country',
      width: 155,
      // Sorting removed
    },
    {
      title: renderColumnTitle("Site"),
      dataIndex: 'site',
      key: 'site',
      width: 157,
      // Sorting removed
    },
  ];

  const data: EmployeeData[] = [
    {
      key: '1',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '2',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '3',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '4',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '5',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '6',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '7',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
    {
      key: '8',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      gearincEmail: 'Lorem Ipsum Semper',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    },
  ];

  return (
    <div className="employee-table-new-container">
      <Table
        columns={columns}
        dataSource={data}
        // Removed onChange handler
        pagination={false}
        scroll={{ x: 1656 }}
        className="employee-table-new"
        rowClassName="table-row"
        tableLayout="fixed"
        showSorterTooltip={false}
        sortDirections={[]}
      />
    </div>
  );
};

export default EmployeeTableNew;
