import React from 'react';
import { Alert } from 'antd';
import './NotificationBanner.css';

const NotificationBanner: React.FC = () => {
  return (
    <div className="notification-banner-container">
      <Alert
        message="Your profile edit changes have been submitted"
        type="info"
        showIcon
        closable
        className="notification-banner"
      />
    </div>
  );
};

export default NotificationBanner;
