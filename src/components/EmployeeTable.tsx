import React from 'react';
import { Table, Avatar } from 'antd';
import './EmployeeTable.css';

export interface EmployeeRecord {
  key: string;
  photo: string;
  employeeId: string;
  completeName: string;
  genericEmail: string;
  designation: string;
  division: string;
  department: string;
  project: string;
  country: string;
  site: string;
}

const stringSorter = (field: keyof EmployeeRecord) => {
  return (a: EmployeeRecord, b: EmployeeRecord) =>
    String(a[field] ?? '').localeCompare(String(b[field] ?? ''), undefined, { sensitivity: 'base' });
};

const columns = [
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    width: 80,
    render: (url: string) => <Avatar src={url} size={32} />,
  },
  {
    title: 'Employee ID',
    dataIndex: 'employeeId',
    key: 'employeeId',
    sorter: stringSorter('employeeId'),
    sortDirections: ['ascend', 'descend'],
    width: 120,
  },
  {
    title: 'Complete name',
    dataIndex: 'completeName',
    key: 'completeName',
    sorter: stringSorter('completeName'),
    sortDirections: ['ascend', 'descend'],
    width: 180,
    ellipsis: true,
  },
  {
    title: 'Generic email',
    dataIndex: 'genericEmail',
    key: 'genericEmail',
    sorter: stringSorter('genericEmail'),
    sortDirections: ['ascend', 'descend'],
    width: 200,
    ellipsis: true,
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
    sorter: stringSorter('designation'),
    sortDirections: ['ascend', 'descend'],
    width: 160,
  },
  {
    title: 'Division',
    dataIndex: 'division',
    key: 'division',
    sorter: stringSorter('division'),
    sortDirections: ['ascend', 'descend'],
    width: 160,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
    sorter: stringSorter('department'),
    sortDirections: ['ascend', 'descend'],
    width: 200,
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    sorter: stringSorter('project'),
    sortDirections: ['ascend', 'descend'],
    width: 180,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: stringSorter('country'),
    sortDirections: ['ascend', 'descend'],
    width: 120,
  },
  {
    title: 'Site',
    dataIndex: 'site',
    key: 'site',
    sorter: stringSorter('site'),
    sortDirections: ['ascend', 'descend'],
    width: 140,
  },
];

const generateData = (count: number): EmployeeRecord[] => {
  const rows: EmployeeRecord[] = [];
  for (let i = 0; i < count; i += 1) {
    rows.push({
      key: String(i),
      photo: 'https://i.pravatar.cc/56?img=5',
      employeeId: 'EMP12345',
      completeName: 'Lorem Ipsum Semper',
      genericEmail: 'lorem@ipsum.com',
      designation: 'Lorem Ipsum Semper',
      division: 'Lorem Ipsum Semper',
      department: 'Lorem Ipsum Semper',
      project: 'Lorem Ipsum Semper',
      country: 'Lorem Ipsum Semper',
      site: 'Lorem Ipsum Semper',
    });
  }
  return rows;
};

const dataSource = generateData(18);

const EmployeeTable: React.FC = () => {
  return (
    <div className="employee-table" style={{ background: 'white', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 0 }}>
      <Table
        dataSource={dataSource}
        columns={columns as any}
        pagination={false}
        size="middle"
        rowKey="key"
        tableLayout="fixed"
        sticky
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default EmployeeTable;
