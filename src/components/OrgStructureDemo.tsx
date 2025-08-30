import React from 'react';
import { App, ConfigProvider } from 'antd';
import OrgStructureTable from './OrgStructureTable';

// Define Node type locally for this file
interface Node {
  id: string;
  type: 'division' | 'department' | 'subDepartment' | 'subDepartment2';
  name: string;
  unitLeader?: string;
  children?: Node[];
}

// Sample data matching the screenshot
const sampleData: Node[] = [
  {
    id: 'div-1',
    type: 'division',
    name: 'Division',
    unitLeader: 'Lorem Ipsum Semper',
    children: [
      {
        id: 'dept-1',
        type: 'department',
        name: 'Department',
        unitLeader: 'Lorem Ipsum Semper',
      }
    ]
  },
  {
    id: 'div-2',
    type: 'division',
    name: 'Division',
    unitLeader: 'Lorem Ipsum Semper',
    children: [
      {
        id: 'dept-2',
        type: 'department',
        name: 'Department',
        unitLeader: 'Lorem Ipsum Semper',
      },
      {
        id: 'dept-3',
        type: 'department',
        name: 'Department',
        unitLeader: 'Lorem Ipsum Semper',
        children: [
          {
            id: 'subdept-1',
            type: 'subDepartment',
            name: 'Sub Department',
            unitLeader: 'Lorem Ipsum Semper',
            children: [
              {
                id: 'subdept2-1',
                type: 'subDepartment2',
                name: 'Sub Department 2',
                unitLeader: 'Lorem Ipsum Semper',
              },
              {
                id: 'subdept2-2',
                type: 'subDepartment2',
                name: 'Sub Department 2',
                unitLeader: 'Lorem Ipsum Semper',
              }
            ]
          },
          {
            id: 'subdept-2',
            type: 'subDepartment',
            name: 'Sub Department',
            unitLeader: 'Lorem Ipsum Semper',
          }
        ]
      }
    ]
  },
  {
    id: 'div-3',
    type: 'division',
    name: 'Division',
    unitLeader: 'Lorem Ipsum Semper',
    children: [
      {
        id: 'dept-4',
        type: 'department',
        name: 'Department',
        unitLeader: 'Lorem Ipsum Semper',
      }
    ]
  }
];

const OrgStructureDemo: React.FC = () => {
  const handleDataChange = (data: Node[]) => {
    console.log('Data changed:', data);
  };

  return (
    <ConfigProvider>
      <App>
        <div style={{ padding: '24px' }}>
          <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <OrgStructureTable 
              initialData={sampleData} 
              onChange={handleDataChange} 
            />
          </div>
        </div>
      </App>
    </ConfigProvider>
  );
};

export default OrgStructureDemo;
