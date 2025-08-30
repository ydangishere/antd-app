import React from 'react';
import { message } from 'antd';
import CoreNotiMessageAction from './CoreNotiMessageAction';

const CoreNotiMessageActionDemo: React.FC = () => {
  const handleApprove = () => {
    message.success('Notification approved');
  };

  const handleReject = () => {
    message.error('Notification rejected');
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <CoreNotiMessageAction
        title="Changing employee info"
        time="5 minutes ago"
        message="Lorem ipsum morbi habitasse pretium in molestie."
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default CoreNotiMessageActionDemo;
