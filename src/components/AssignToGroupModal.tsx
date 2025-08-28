import React, { useState } from 'react';
import { Modal, Radio, Button, Space } from 'antd';
import './AssignToGroupModal.css';

interface AssignToGroupModalProps {
  visible: boolean;
  onCancel: () => void;
  onAssign: (group: string) => void;
}

const AssignToGroupModal: React.FC<AssignToGroupModalProps> = ({
  visible,
  onCancel,
  onAssign,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('Vietnam');

  const handleAssign = () => {
    onAssign(selectedGroup);
  };

  return (
    <Modal
      title="Assign to group"
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="assign-group-modal"
      width={400}
    >
      <div className="assign-group-content">
        <Radio.Group 
          value={selectedGroup} 
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="group-radio-container"
        >
          <div className="radio-row">
            <Radio value="Vietnam">Vietnam</Radio>
            <Radio value="Indonesia">Indonesia</Radio>
            <Radio value="Laos">Laos</Radio>
          </div>
          <div className="radio-row">
            <Radio value="Thailand">Thailand</Radio>
            <Radio value="Philippines">Philippines</Radio>
            <Radio value="India">India</Radio>
          </div>
          <div className="radio-row">
            <Radio value="Unassigned">Unassigned</Radio>
            <Radio value="Others">Others</Radio>
            <div style={{ flex: 1 }}></div>
          </div>
        </Radio.Group>
      </div>
      
      <div className="modal-footer">
        <Space>
          <Button onClick={onCancel}>Discard</Button>
          <Button type="primary" onClick={handleAssign}>Assign</Button>
        </Space>
      </div>
    </Modal>
  );
};

export default AssignToGroupModal;
