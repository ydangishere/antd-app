import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Input, Radio, DatePicker, TimePicker, InputNumber, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './LeaveTimeRequestModal.css';

const { TextArea } = Input;
const { Option } = Select;

interface LeaveTimeRequestModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
}

const LeaveTimeRequestModal: React.FC<LeaveTimeRequestModalProps> = ({
  visible,
  onCancel,
  onSubmit
}) => {
  const [form] = Form.useForm();
  const [leaveType, setLeaveType] = useState<string>('Normal leave');
  const [leaveTimeType, setLeaveTimeType] = useState<string>('One day');
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(null);
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(null);
  const [totalHours, setTotalHours] = useState<number>(0);

  // Calculate total hours when start or end time changes
  useEffect(() => {
    if (startTime && endTime) {
      const start = startTime.hour() + startTime.minute() / 60;
      const end = endTime.hour() + endTime.minute() / 60;
      const total = end - start;
      setTotalHours(total > 0 ? total : 0);
      form.setFieldsValue({ totalHours: total > 0 ? total : 0 });
    }
  }, [startTime, endTime, form]);

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="LEAVE TIME REQUEST"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={550}
      className="leave-time-request-modal"
      maskClosable={false}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          leaveType: 'Normal leave',
          leaveTimeType: 'One day',
          totalHours: 0,
          accommodatedHours: 0
        }}
      >
        <Form.Item
          name="leaveType"
          label="Leave type"
          rules={[{ required: true, message: 'Please select leave type' }]}
        >
          <Select onChange={(value) => setLeaveType(value)}>
            <Option value="Normal leave">Normal leave</Option>
            <Option value="Sick leave">Sick leave</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="reason"
          label="Reason"
          rules={[{ required: true, message: 'Please enter reason' }]}
        >
          <Input placeholder="Input reason" />
        </Form.Item>

        <Form.Item
          name="leaveTimeType"
          label="Time of leave"
        >
          <Radio.Group onChange={(e) => setLeaveTimeType(e.target.value)}>
            <Radio value="One day">One day</Radio>
            <Radio value="Multiple days">Multiple days</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="leaveDate"
          rules={[{ required: true, message: 'Please select date' }]}
        >
          <DatePicker 
            className="full-width" 
            placeholder="Select date"
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          name="offTime"
          label="Off time"
        >
          <Select placeholder="Select off time">
            <Option value="full-day">Full day</Option>
            <Option value="morning">Morning</Option>
            <Option value="afternoon">Afternoon</Option>
            <Option value="custom">Custom</Option>
          </Select>
        </Form.Item>

        <div className="time-range">
          <Form.Item
            name="startTime"
            label="Start time"
            className="time-picker-item"
          >
            <TimePicker 
              format="HH:mm" 
              placeholder="--:--"
              onChange={(time) => setStartTime(time)}
            />
          </Form.Item>

          <Form.Item
            name="endTime"
            label="End time"
            className="time-picker-item"
          >
            <TimePicker 
              format="HH:mm" 
              placeholder="--:--"
              onChange={(time) => setEndTime(time)}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="totalHours"
          label="Total hours"
        >
          <InputNumber 
            className="full-width" 
            readOnly 
            value={totalHours}
          />
        </Form.Item>

        <Form.Item
          name="accommodatedHours"
          label={
            <span>
              Accommodated hours 
              <InfoCircleOutlined className="info-icon" />
            </span>
          }
        >
          <InputNumber className="full-width" min={0} />
        </Form.Item>

        <Form.Item
          name="note"
          label="Note"
        >
          <TextArea rows={4} placeholder="Input note" />
        </Form.Item>

        <div className="modal-footer">
          <Button onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default LeaveTimeRequestModal;
