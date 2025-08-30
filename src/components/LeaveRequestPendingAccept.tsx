import React, { useState } from 'react';
import { Form, Input, Select, Radio, DatePicker, InputNumber, Button, Card, Space, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './LeaveRequestPendingAccept.css';

const { TextArea } = Input;
const { Option } = Select;

interface LeaveRequestPendingAcceptProps {
  onApprove: () => void;
  onReject: () => void;
}

const LeaveRequestPendingAccept: React.FC<LeaveRequestPendingAcceptProps> = ({
  onApprove,
  onReject
}) => {
  const [form] = Form.useForm();
  const [leaveTimeType, setLeaveTimeType] = useState<string>('One day');
  
  // Prefilled data
  const requestData = {
    id: '829',
    requester: 'Thức, Nguyễn Hữu (EID: 7442)',
    leaveType: 'Normal leave',
    reason: 'Vavava',
    leaveTimeType: 'One day',
    leaveDate: dayjs('2025-08-21'),
    offTime: 'The entire day',
    startTime: '08:30',
    endTime: '18:00',
    totalHours: 8,
    accommodatedHours: 0,
    note: 'Your note'
  };

  return (
    <div className="leave-request-container">
      <Card className="leave-request-card">
        <div className="leave-request-header">
          <h2 className="leave-request-title">LEAVE TIME REQUEST</h2>
          <div className="leave-request-status">
            <Select 
              defaultValue="Pending" 
              bordered={true} 
              className="status-select"
              size="small"
              disabled
            >
              <Option value="Pending">Pending</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Rejected">Rejected</Option>
            </Select>
          </div>
        </div>
        
        <Form
          form={form}
          layout="vertical"
          initialValues={requestData}
        >
          <div className="form-row">
                      <Form.Item
            name="id"
            label="ID"
            className="id-field"
          >
            <Input value="829" disabled />
          </Form.Item>
          </div>

          <Form.Item
            name="requester"
            label="Requester"
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="leaveType"
            label="Leave type"
          >
            <Select disabled>
              <Option value="Normal leave">Normal leave</Option>
              <Option value="Sick leave">Sick leave</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="reason"
            label="Reason"
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="leaveTimeType"
            label="Time of leave"
          >
            <Radio.Group 
              onChange={(e) => setLeaveTimeType(e.target.value)}
              disabled
            >
              <Radio value="One day">One day</Radio>
              <Radio value="Multiple days">Multiple days</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="leaveDate"
            label=""
          >
            <Input 
              className="full-width" 
              value="Thursday - August 21, 2025"
              disabled
            />
          </Form.Item>

          <Form.Item
            name="offTime"
            label="Off time"
          >
            <Select disabled className="full-width">
              <Option value="The entire day">The entire day</Option>
              <Option value="Morning">Morning</Option>
              <Option value="Afternoon">Afternoon</Option>
              <Option value="Custom">Custom</Option>
            </Select>
          </Form.Item>

          <div className="time-range">
            <Form.Item
              name="startTime"
              label="Start time"
              className="time-picker-item"
            >
              <Input disabled value="08:30" suffix={<span className="time-icon">⏱</span>} />
            </Form.Item>

            <Form.Item
              name="endTime"
              label="End time"
              className="time-picker-item"
            >
              <Input disabled value="18:00" suffix={<span className="time-icon">⏱</span>} />
            </Form.Item>
          </div>

          <Form.Item
            name="totalHours"
            label="Total hours"
          >
            <InputNumber 
              className="full-width" 
              disabled
            />
          </Form.Item>

          <Form.Item
            name="accommodatedHours"
            label={
              <span>
                Accommodated hours 
                <Tooltip title="Hours that will be accommodated for this leave request">
                  <InfoCircleOutlined className="info-icon" />
                </Tooltip>
              </span>
            }
          >
            <InputNumber className="full-width" disabled />
          </Form.Item>

          <Form.Item
            name="note"
            label="Note"
          >
            <div className="note-field">
              <div className="note-label">Your note</div>
              <TextArea 
                rows={4} 
                placeholder="Input note"
                className="note-textarea"
              />
            </div>
          </Form.Item>

          <div className="action-buttons">
            <Button onClick={onReject} className="reject-button">
              Reject
            </Button>
            <Button type="primary" onClick={onApprove} className="approve-button">
              Approve
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LeaveRequestPendingAccept;
