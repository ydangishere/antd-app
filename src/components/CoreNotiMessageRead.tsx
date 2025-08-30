import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './CoreNotiMessageRead.css';

interface CoreNotiMessageReadProps {
  title?: string;
  time?: string;
  message?: string;
}

const CoreNotiMessageRead: React.FC<CoreNotiMessageReadProps> = ({
  title = "Changing employee info",
  time = "5 minutes ago",
  message = "Lorem ipsum morbi habitasse pretium in molestie."
}) => {
  return (
    <div className="core-noti-message-read-container">
      <div className="core-noti-message-read-card">
        <div className="core-noti-message-read-content">
          <div className="core-noti-message-read-info-bar">
            <div className="core-info-title">{title}</div>
            <div className="core-info-time">{time}</div>
          </div>
          
          <div className="core-noti-message-read-body">
            <Avatar 
              icon={<UserOutlined />} 
              className="core-noti-message-read-avatar"
              size={60}
            />
            
            <div className="core-noti-message-read-message">
              {message}
            </div>
          </div>
        </div>
        
        <div className="core-noti-message-read-dot"></div>
      </div>
    </div>
  );
};

export default CoreNotiMessageRead;
