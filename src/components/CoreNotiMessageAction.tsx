import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './CoreNotiMessageAction.css';

interface CoreNotiMessageActionProps {
  title?: string;
  time?: string;
  message?: string;
  onApprove: () => void;
  onReject: () => void;
}

const CoreNotiMessageAction: React.FC<CoreNotiMessageActionProps> = ({
  title = "Changing employee info",
  time = "5 minutes ago",
  message = "Lorem ipsum morbi habitasse pretium in molestie.",
  onApprove,
  onReject
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleApprove = () => {
    setIsVisible(false);
    onApprove();
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="core-noti-message-action-container">
      <div className="core-noti-message-action-card">
        <div className="core-noti-message-action-content">
          <div className="core-noti-message-action-info-bar">
            <div className="core-action-info-title">{title}</div>
            <div className="core-action-info-time">{time}</div>
          </div>
          
          <div className="core-noti-message-action-body">
            <Avatar 
              icon={<UserOutlined />} 
              className="core-noti-message-action-avatar"
              size={60}
            />
            
            <div className="core-noti-message-action-message">
              {message}
            </div>
            
            <div className="core-noti-message-action-buttons">
              <button className="core-btn-reject" onClick={handleReject}>
                Reject
              </button>
              <button className="core-btn-approve" onClick={handleApprove}>
                Approve
              </button>
            </div>
          </div>
        </div>
        
        <div className="core-noti-message-action-dot"></div>
      </div>
    </div>
  );
};

export default CoreNotiMessageAction;
