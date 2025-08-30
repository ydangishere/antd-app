import React from 'react';
import LeaveRequestPendingAccept from './LeaveRequestPendingAccept';
import { message } from 'antd';

const LeaveRequestPendingAcceptDemo: React.FC = () => {
  const handleApprove = () => {
    message.success('Leave request approved');
  };

  const handleReject = () => {
    message.error('Leave request rejected');
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <LeaveRequestPendingAccept
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default LeaveRequestPendingAcceptDemo;
