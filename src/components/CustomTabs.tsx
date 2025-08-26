import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './CustomTabs.css';

interface TabData {
  key: string;
  label: string;
  count: number;
}

const CustomTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState('active');

  const tabItems: TabData[] = [
    { key: 'active', label: 'Active', count: 5 },
    { key: 'inactive', label: 'Inactive', count: 8 },
    { key: 'onboard', label: 'On-board', count: 6 },
    { key: 'offboard', label: 'Off-board', count: 12 },
    { key: 'idle', label: 'Idle', count: 2 },
  ];

  const items: TabsProps['items'] = tabItems.map((tab) => ({
    key: tab.key,
    label: (
      <span className="custom-tab-label">
        {tab.label} ({tab.count})
      </span>
    ),
  }));

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="custom-tabs-container">
      <Tabs
        activeKey={activeKey}
        items={items}
        onChange={handleTabChange}
        className="custom-tabs"
      />
    </div>
  );
};

export default CustomTabs;
