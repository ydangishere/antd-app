import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import './NewProfileForm.css';

interface NewProfileFormProps {
  onDiscard?: () => void;
  onCreate?: (profileData: ProfileData) => void;
}

interface ProfileData {
  site: string;
  joinedDate: string;
  completeName: string;
  workEmail: string;
  employeeCode: string;
}

const NewProfileForm: React.FC<NewProfileFormProps> = ({ 
  onDiscard, 
  onCreate 
}) => {
  const [formData, setFormData] = useState<ProfileData>({
    site: '',
    joinedDate: '',
    completeName: '',
    workEmail: '',
    employeeCode: ''
  });

  // Auto generate employee code based on site and joined date
  useEffect(() => {
    if (formData.site && formData.joinedDate) {
      const date = new Date(formData.joinedDate);
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const random = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      
      const generatedCode = `${year}${month}${day}${random}`;
      setFormData(prev => ({ ...prev, employeeCode: generatedCode }));
    }
  }, [formData.site, formData.joinedDate]);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (onCreate) {
      onCreate(formData);
    }
  };

  return (
    <div className="profile-form-container">
      <div className="profile-form-header">
        <h2>Create New Profile</h2>
      </div>
      
      <div className="profile-form-content">
        {/* Site Field */}
        <div className="form-field">
          <label className="form-label">Site</label>
          <Select
            className="form-select"
            value={formData.site || undefined}
            onChange={(value) => handleInputChange('site', value)}
            placeholder="Select Site"
            style={{
              backgroundColor: formData.site ? '#e6f4ff' : '#f0f0f0',
              width: '100%',
              textAlign: 'left'
            }}
            options={[
              { value: 'hanoi', label: 'Hanoi Office' },
              { value: 'hcmc', label: 'Ho Chi Minh Office' },
              { value: 'danang', label: 'Da Nang Office' },
              { value: 'remote', label: 'Remote' }
            ]}
            dropdownStyle={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #d9d9d9',
              borderRadius: '6px'
            }}
            dropdownClassName="ant-select-dropdown-custom"
          />
        </div>

        {/* Joined Date Field */}
        <div className="form-field">
          <label className="form-label">Joined Date</label>
          <div className="date-input-wrapper">
            <input
              type="date"
              className="form-input date-input"
              value={formData.joinedDate}
              onChange={(e) => handleInputChange('joinedDate', e.target.value)}
            />
            <div className="date-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 6h12M5 1v2M11 1v2M2.5 3h11a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-8A1.5 1.5 0 0 1 2.5 3z" stroke="#999" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Complete Name Field */}
        <div className="form-field">
          <label className="form-label">Complete Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter full name"
            value={formData.completeName}
            onChange={(e) => handleInputChange('completeName', e.target.value)}
          />
        </div>

        {/* Work Email Field */}
        <div className="form-field">
          <label className="form-label">Work Email Address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter work email"
            value={formData.workEmail}
            onChange={(e) => handleInputChange('workEmail', e.target.value)}
          />
        </div>

        {/* Employee Code Field */}
        <div className="form-field">
          <label className="form-label">Employee Code</label>
          <input
            type="text"
            className="form-input auto-gen"
            value={formData.employeeCode}
            readOnly
          />
          <div className="form-helper">
            This field is auto gen base on Site and Joined Date
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="profile-form-actions">
        <button 
          className="btn-discard" 
          onClick={onDiscard}
        >
          Discard
        </button>
        <button 
          className="btn-create enabled"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewProfileForm;
