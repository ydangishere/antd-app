import React, { useState } from 'react';
import { Button } from 'antd';
import RequestModal from './RequestModal';

const RequestModalDemo: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleReject = () => {
    console.log('Request rejected');
    setIsModalVisible(false);
  };

  const handleApprove = () => {
    console.log('Request approved');
    setIsModalVisible(false);
  };

  // Sample data
  const requestData = {
    reason: '(reason input by requester from their request)',
    timestamp: '2023-08-13 14:35:22 (UTC)',
    requesterName: 'Nguyen Van A'
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button type="primary" onClick={showModal}>
        Show Request Modal
      </Button>
      
      <RequestModal
        visible={isModalVisible}
        onClose={handleClose}
        onReject={handleReject}
        onApprove={handleApprove}
        requestData={requestData}
      />
    </div>
  );
};

export default RequestModalDemo;
