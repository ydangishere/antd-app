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
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    setSortedInfo(sorter);
  };

  const columns: ColumnsType<EmployeeData> = [
    {
      title: (
        <div className="table-header-cell">
          <div className="sorter">
            <div className="english-score">Photo</div>
          </div>
        </div>
      ),
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
                   title: (
               <div className="table-header-cell">
                 <div className="sorter1">
                   <div className="english-score">Employee ID</div>
                 </div>
               </div>
             ),
      dataIndex: 'employeeId',
      key: 'employeeId',
      width: 161,
      sorter: (a, b) => a.employeeId.localeCompare(b.employeeId),
      sortOrder: sortedInfo.columnKey === 'employeeId' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="table-header-cell">
                 <div className="sorter1">
                   <div className="english-score">Complete name</div>
                 </div>
               </div>
             ),
      dataIndex: 'completeName',
      key: 'completeName',
      width: 205,
      sorter: (a, b) => a.completeName.localeCompare(b.completeName),
      sortOrder: sortedInfo.columnKey === 'completeName' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="table-header-cell">
                 <div className="sorter1">
                   <div className="english-score">Gearinc email</div>
                 </div>
               </div>
             ),
      dataIndex: 'gearincEmail',
      key: 'gearincEmail',
      width: 189,
      sorter: (a, b) => a.gearincEmail.localeCompare(b.gearincEmail),
      sortOrder: sortedInfo.columnKey === 'gearincEmail' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Designation</div>
               </div>
             ),
      dataIndex: 'designation',
      key: 'designation',
      width: 175,
      sorter: (a, b) => a.designation.localeCompare(b.designation),
      sortOrder: sortedInfo.columnKey === 'designation' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Division</div>
               </div>
             ),
      dataIndex: 'division',
      key: 'division',
      width: 161,
      sorter: (a, b) => a.division.localeCompare(b.division),
      sortOrder: sortedInfo.columnKey === 'division' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Department</div>
               </div>
             ),
      dataIndex: 'department',
      key: 'department',
      width: 165,
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortOrder: sortedInfo.columnKey === 'department' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Project</div>
               </div>
             ),
      dataIndex: 'project',
      key: 'project',
      width: 177,
      sorter: (a, b) => a.project.localeCompare(b.project),
      sortOrder: sortedInfo.columnKey === 'project' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Country</div>
               </div>
             ),
      dataIndex: 'country',
      key: 'country',
      width: 155,
      sorter: (a, b) => a.country.localeCompare(b.country),
      sortOrder: sortedInfo.columnKey === 'country' ? sortedInfo.order : null,
    },
    {
                   title: (
               <div className="sorter1">
                 <div className="english-score">Site</div>
               </div>
             ),
      dataIndex: 'site',
      key: 'site',
      width: 157,
      sorter: (a, b) => a.site.localeCompare(b.site),
      sortOrder: sortedInfo.columnKey === 'site' ? sortedInfo.order : null,
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
        onChange={handleChange}
        pagination={false}
        scroll={{ x: 1656 }}
        className="employee-table-new"
        rowClassName="table-row"
      />
    </div>
  );
};

export default EmployeeTableNew;
