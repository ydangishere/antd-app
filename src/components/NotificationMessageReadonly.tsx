import React, { useState } from 'react';
import { Avatar, Dropdown, Checkbox, Button } from 'antd';
import { UserOutlined, FilterFilled } from '@ant-design/icons';
import './NotificationMessageReadonly.css';

interface NotificationMessageReadonlyProps {
  onMarkAllAsRead?: () => void;
  onFilter?: () => void;
}

const NotificationMessageReadonly: React.FC<NotificationMessageReadonlyProps> = ({
  onMarkAllAsRead,
  onFilter
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    read: false,
    unread: true,
    informational: true,
    actionable: true
  });

  const handleFilterChange = (key: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const handleReset = () => {
    setFilters({
      read: false,
      unread: true,
      informational: true,
      actionable: true
    });
  };

  const handleApply = () => {
    setFilterVisible(false);
    if (onFilter) {
      onFilter();
    }
  };

  const filterMenu = (
    <div className="filter-dropdown-readonly">
      <div className="filter-options-readonly">
        <div className="filter-item-readonly">
          <Checkbox 
            checked={filters.read}
            onChange={(e) => handleFilterChange('read', e.target.checked)}
          >
            Read
          </Checkbox>
        </div>
        <div className="filter-item-readonly">
          <Checkbox 
            checked={filters.unread}
            onChange={(e) => handleFilterChange('unread', e.target.checked)}
          >
            Unread
          </Checkbox>
        </div>
        <div className="filter-item-readonly">
          <Checkbox 
            checked={filters.informational}
            onChange={(e) => handleFilterChange('informational', e.target.checked)}
          >
            Informational
          </Checkbox>
        </div>
        <div className="filter-item-readonly">
          <Checkbox 
            checked={filters.actionable}
            onChange={(e) => handleFilterChange('actionable', e.target.checked)}
          >
            Actionable
          </Checkbox>
        </div>
      </div>
      <div className="filter-actions-readonly">
        <Button type="text" size="small" onClick={handleReset}>
          Reset
        </Button>
        <Button type="primary" size="small" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );

  return (
    <div className="notification-message-readonly-container">
      <div className="notification-message-readonly-card">
        <div className="notification-message-readonly-header">
          <div className="notification-message-readonly-title">Notifications</div>
          <div className="notification-message-readonly-actions">
            <Dropdown 
              overlay={filterMenu} 
              trigger={['click']} 
              visible={filterVisible}
              onVisibleChange={setFilterVisible}
              placement="bottomRight"
            >
              <div className="notification-message-readonly-filter">
                <span className="filter-text-readonly">Filter</span>
                <FilterFilled className="filter-icon-readonly" />
              </div>
            </Dropdown>
            <div className="notification-message-readonly-mark" onClick={onMarkAllAsRead}>
              Mark as read all
            </div>
          </div>
        </div>
        
        <div className="notification-message-readonly-content">
          <div className="notification-message-readonly-info-bar">
            <div className="info-title-readonly">Changing employee info</div>
            <div className="info-time-readonly">5 minutes ago</div>
          </div>
          
          <div className="notification-message-readonly-body">
            <Avatar 
              icon={<UserOutlined />} 
              className="notification-message-readonly-avatar"
              size={60}
            />
            
            <div className="notification-message-readonly-message">
              Lorem ipsum morbi habitasse pretium in molestie.
            </div>
          </div>
        </div>
        
        <div className="notification-message-readonly-dot"></div>
      </div>
    </div>
  );
};

export default NotificationMessageReadonly;
