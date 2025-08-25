import React, { useState } from 'react';
import './FilterComponent.css';
import downArrowIcon from '../assets/down-arrow.svg';

interface FilterOption {
  label: string;
  value: string;
  isMultiSelect?: boolean;
}

interface FilterComponentProps {
  onFilter?: (filters: Record<string, string[]>) => void;
  onCancel?: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onCancel }) => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const filterOptions: FilterOption[] = [
    { label: 'Select Employee Type', value: 'employeeType', isMultiSelect: true },
    { label: 'Select Employment Status', value: 'employmentStatus', isMultiSelect: true },
    { label: 'Select Designation', value: 'designation', isMultiSelect: true },
    { label: 'Select Division', value: 'division', isMultiSelect: true },
    { label: 'Select Department', value: 'department', isMultiSelect: true },
    { label: 'Select Sub Department', value: 'subDepartment', isMultiSelect: true },
    { label: 'Select Vertical', value: 'vertical', isMultiSelect: true },
    { label: 'Select Project', value: 'project', isMultiSelect: true },
    { label: 'Select Sites', value: 'sites', isMultiSelect: true },
    { label: 'Select Offices', value: 'offices', isMultiSelect: true },
    { label: 'Select Contract Types', value: 'contractTypes', isMultiSelect: true },
    { label: 'Select Gender', value: 'gender', isMultiSelect: false },
  ];

  const handleFilter = () => {
    if (onFilter) {
      onFilter(filters);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="dialog">
      <div className="horizontalborder">
        <div className="filter">Filter</div>
      </div>
      <div className="container">
        <div className="form">
          <div className="group-parent">
            {filterOptions.map((option, index) => (
              <div 
                key={option.value} 
                className={index % 2 === 0 ? "container-parent" : index % 3 === 0 ? "container-parent2" : "container-group"}
              >
                <div className={index % 2 === 0 ? "container1" : "container4"}></div>
                <div className={index % 2 === 0 ? "container2" : index % 3 === 0 ? "container17" : "container5"}>
                  <div className={index % 2 === 0 ? "backgroundborder" : index % 3 === 0 ? "backgroundborder5" : "backgroundborder1"}>
                    <div className="container3">
                      <div className="select-employee-type-container">
                        <span>{option.label}</span>
                        {option.isMultiSelect && <span className="multi-select"> [Multi Select]</span>}
                      </div>
                    </div>
                  </div>
                  <img 
                    className={index % 2 === 0 ? "img-down-svg" : index % 3 === 0 ? "img-down-svg5" : "img-down-svg1"} 
                    alt="" 
                    src={downArrowIcon} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="horizontalborder1">
          <div className="cancel-wrapper" onClick={handleCancel}>
            <div className="cancel">Cancel</div>
          </div>
          <div className="filter-wrapper" onClick={handleFilter}>
            <div className="cancel">Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
