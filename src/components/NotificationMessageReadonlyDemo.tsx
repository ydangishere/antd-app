import React from 'react';
import { message } from 'antd';
import NotificationMessageReadonly from './NotificationMessageReadonly';

const NotificationMessageReadonlyDemo: React.FC = () => {
  const handleMarkAllAsRead = () => {
    message.info('All notifications marked as read');
  };

  const handleFilter = () => {
    message.info('Filter clicked');
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <NotificationMessageReadonly
        onMarkAllAsRead={handleMarkAllAsRead}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default NotificationMessageReadonlyDemo;
