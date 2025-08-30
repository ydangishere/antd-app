import React from 'react';
import { Modal, Typography, Button } from 'antd';
import './RequestModal.css';

const { Paragraph } = Typography;

interface RequestModalProps {
  visible: boolean;
  onClose: () => void;
  onReject: () => void;
  onApprove: () => void;
  requestData: {
    reason: string;
    timestamp: string;
    requesterName: string;
  };
}

const RequestModal: React.FC<RequestModalProps> = ({
  visible,
  onClose,
  onReject,
  onApprove,
  requestData
}) => {
  return (
    <Modal
      title="A request message"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="reject" onClick={onReject} className="reject-button">
          Reject
        </Button>,
        <Button key="approve" type="primary" onClick={onApprove} className="approve-button">
          Approve
        </Button>
      ]}
      width={550}
      className="request-modal"
    >
      <div className="info-box">
        <Paragraph className="info-message">
          This message to let the you know a change request is made for your approval
        </Paragraph>
      </div>
      
      <ul className="request-details">
        <li>
          Profile ID has been changed its job title, division, department. Click{' '}
          <a href="#" className="detail-link">here</a> for detail
        </li>
        <li>
          Reasons: {requestData.reason}
        </li>
        <li>
          Timestamp of change: {requestData.timestamp}
        </li>
        <li>
          Requester's name: {requestData.requesterName}
        </li>
      </ul>
    </Modal>
  );
};

export default RequestModal;
