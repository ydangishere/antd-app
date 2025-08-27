import React from 'react';
import { Select, Button, Space, Row, Col, Tag } from 'antd';
import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import './FilterComponent.css';

const { Option } = Select;

interface FilterComponentProps {
  onFilter: (filters: any) => void;
  onCancel: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onCancel }) => {
  const [filters, setFilters] = React.useState<any>({
    employmentType: ['Part-time', 'Full-time', 'Intern'],
    employmentStatus: [],
    designation: [],
    division: [],
    department: [],
    subDepartment: [],
    vertical: [],
    project: [],
    sites: [],
    offices: [],
    contractTypes: [],
    gender: undefined,
  });

  const handleChange = (value: any, field: string) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  const handleFilter = () => {
      onFilter(filters);
  };

  // Mock data for dropdowns
  const employmentStatusOptions = ['Active', 'On Leave', 'Terminated', 'Suspended'];
  const designationOptions = ['Manager', 'Developer', 'Designer', 'QA Engineer', 'Team Lead'];
  const divisionOptions = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];
  const departmentOptions = ['Engineering', 'Product', 'Design', 'QA', 'DevOps'];
  const subDepartmentOptions = ['Frontend', 'Backend', 'Mobile', 'Infrastructure', 'Data Science'];
  const verticalOptions = ['Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing'];
  const projectOptions = ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'];
  const sitesOptions = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'];
  const officesOptions = ['Office 1', 'Office 2', 'Office 3', 'Office 4', 'Office 5'];
  const contractTypesOptions = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Consultant'];
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      
      <div className="filter-content">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Part-time × Full-time × Intern"
                value={filters.employmentType}
                onChange={(value) => handleChange(value, 'employmentType')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
                tagRender={(props) => {
                  const { label, closable, onClose } = props;
                  return (
                    <Tag closable={closable} onClose={onClose} className="filter-tag">
                      {label}
                    </Tag>
                  );
                }}
              >
                <Option value="Part-time">Part-time</Option>
                <Option value="Full-time">Full-time</Option>
                <Option value="Intern">Intern</Option>
                <Option value="Contract">Contract</Option>
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Employment Status [Multi Select]"
                value={filters.employmentStatus}
                onChange={(value) => handleChange(value, 'employmentStatus')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {employmentStatusOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Designation [Multi Select]"
                value={filters.designation}
                onChange={(value) => handleChange(value, 'designation')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {designationOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Division [Multi Select]"
                value={filters.division}
                onChange={(value) => handleChange(value, 'division')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {divisionOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Department [Multi Select]"
                value={filters.department}
                onChange={(value) => handleChange(value, 'department')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {departmentOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Sub Department [Multi Select]"
                value={filters.subDepartment}
                onChange={(value) => handleChange(value, 'subDepartment')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {subDepartmentOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Vertical [Multi Select]"
                value={filters.vertical}
                onChange={(value) => handleChange(value, 'vertical')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {verticalOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Project [Multi Select]"
                value={filters.project}
                onChange={(value) => handleChange(value, 'project')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {projectOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Sites [Multi Select]"
                value={filters.sites}
                onChange={(value) => handleChange(value, 'sites')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {sitesOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Offices [Multi Select]"
                value={filters.offices}
                onChange={(value) => handleChange(value, 'offices')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {officesOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
              </div>
            
            <div className="filter-item">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Contract Types [Multi Select]"
                value={filters.contractTypes}
                onChange={(value) => handleChange(value, 'contractTypes')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {contractTypesOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item">
              <Select
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Gender"
                value={filters.gender}
                onChange={(value) => handleChange(value, 'gender')}
                suffixIcon={<DownOutlined />}
                className="filter-select"
              >
                {genderOptions.map(option => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </div>
            </Col>
        </Row>
      </div>
      
      <div className="filter-actions">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="primary" onClick={handleFilter}>Filter</Button>
      </div>
    </div>
  );
};

export default FilterComponent;