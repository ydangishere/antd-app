import React, { useState } from 'react';
import { Avatar, Dropdown, Checkbox, Button, Space } from 'antd';
import { UserOutlined, FilterFilled } from '@ant-design/icons';
import './NotificationMessage.css';

interface NotificationMessageProps {
  onApprove: () => void;
  onReject: () => void;
  onMarkAllAsRead?: () => void;
  onFilter?: () => void;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  onApprove,
  onReject,
  onMarkAllAsRead,
  onFilter
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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

  const handleApprove = () => {
    setIsVisible(false);
    onApprove();
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
  };

  const filterMenu = (
    <div className="filter-dropdown">
      <div className="filter-options">
        <div className="filter-item">
          <Checkbox 
            checked={filters.read}
            onChange={(e) => handleFilterChange('read', e.target.checked)}
          >
            Read
          </Checkbox>
        </div>
        <div className="filter-item">
          <Checkbox 
            checked={filters.unread}
            onChange={(e) => handleFilterChange('unread', e.target.checked)}
          >
            Unread
          </Checkbox>
        </div>
        <div className="filter-item">
          <Checkbox 
            checked={filters.informational}
            onChange={(e) => handleFilterChange('informational', e.target.checked)}
          >
            Informational
          </Checkbox>
        </div>
        <div className="filter-item">
          <Checkbox 
            checked={filters.actionable}
            onChange={(e) => handleFilterChange('actionable', e.target.checked)}
          >
            Actionable
          </Checkbox>
        </div>
      </div>
      <div className="filter-actions">
        <Button type="text" size="small" onClick={handleReset}>
          Reset
        </Button>
        <Button type="primary" size="small" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );
  if (!isVisible) {
    return null;
  }

  return (
    <div className="notification-message-container">
      <div className="notification-message-card">
        <div className="notification-message-header">
          <div className="notification-message-title">Notifications</div>
          <div className="notification-message-actions">
            <Dropdown 
              overlay={filterMenu} 
              trigger={['click']} 
              visible={filterVisible}
              onVisibleChange={setFilterVisible}
              placement="bottomRight"
            >
              <div className="notification-message-filter">
                <span className="filter-text">Filter</span>
                <FilterFilled className="filter-icon" />
              </div>
            </Dropdown>
            <div className="notification-message-mark" onClick={onMarkAllAsRead}>
              Mark as read all
            </div>
          </div>
        </div>
        
        <div className="notification-message-content">
          <div className="notification-message-info-bar">
            <div className="info-title">Changing employee info</div>
            <div className="info-time">5 minutes ago</div>
          </div>
          
          <div className="notification-message-body">
            <Avatar 
              icon={<UserOutlined />} 
              className="notification-message-avatar"
              size={60}
            />
            
            <div className="notification-message-message">
              Lorem ipsum morbi habitasse pretium in molestie.
            </div>
            
                          <div className="notification-message-buttons">
                <button className="btn-reject" onClick={handleReject}>
                  Reject
                </button>
                <button className="btn-approve" onClick={handleApprove}>
                  Approve
                </button>
              </div>
          </div>
        </div>
        
        <div className="notification-message-dot"></div>
      </div>
    </div>
  );
};

export default NotificationMessage;
