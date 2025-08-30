import React from 'react';
import { message } from 'antd';
import NotificationMessage from './NotificationMessage';

const NotificationMessageDemo: React.FC = () => {
  const handleApprove = () => {
    message.success('Notification approved');
  };

  const handleReject = () => {
    message.error('Notification rejected');
  };

  const handleMarkAllAsRead = () => {
    message.info('All notifications marked as read');
  };

  const handleFilter = () => {
    message.info('Filter clicked');
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <NotificationMessage
        onApprove={handleApprove}
        onReject={handleReject}
        onMarkAllAsRead={handleMarkAllAsRead}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default NotificationMessageDemo;
