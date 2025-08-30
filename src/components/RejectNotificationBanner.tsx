import React from 'react';
import { Alert } from 'antd';
import './RejectNotificationBanner.css';

const RejectNotificationBanner: React.FC = () => {
  return (
    <div className="reject-notification-banner-container">
      <Alert
        message="A reject message has been sent to requester"
        type="error"
        showIcon
        closable
        className="reject-notification-banner"
      />
    </div>
  );
};

export default RejectNotificationBanner;
