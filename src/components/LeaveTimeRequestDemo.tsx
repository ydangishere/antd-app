import React, { useState } from 'react';
import { Button } from 'antd';
import LeaveTimeRequestModal from './LeaveTimeRequestModal';

const LeaveTimeRequestDemo: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
    setIsModalVisible(false);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button type="primary" onClick={showModal}>
        Open Leave Time Request
      </Button>
      
      <LeaveTimeRequestModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LeaveTimeRequestDemo;
