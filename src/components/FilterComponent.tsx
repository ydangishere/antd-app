import React, { useState } from 'react';
import './FilterComponent.css';
import downArrowIcon from '../assets/down-arrow.svg';

interface FilterOption {
  label: string;
  value: string;
  isMultiSelect?: boolean;
}

interface DropdownItem {
  label: string;
  value: string;
}

interface FilterComponentProps {
  onFilter?: (filters: Record<string, string[]>) => void;
  onCancel?: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onCancel }) => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  // Sample dropdown items for each filter option
  const getDropdownItems = (optionValue: string): DropdownItem[] => {
    const commonItems = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ];
    
    if (optionValue === 'gender') {
      return [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ];
    }
    
    return commonItems;
  };
  
  const toggleDropdown = (optionValue: string) => {
    setOpenDropdown(openDropdown === optionValue ? null : optionValue);
  };
  
  const handleItemSelect = (optionValue: string, itemValue: string) => {
    const currentValues = filters[optionValue] || [];
    const option = filterOptions.find(opt => opt.value === optionValue);
    
    if (option?.isMultiSelect) {
      // Toggle selection for multi-select
      const newValues = currentValues.includes(itemValue)
        ? currentValues.filter(v => v !== itemValue)
        : [...currentValues, itemValue];
      
      setFilters(prev => ({
        ...prev,
        [optionValue]: newValues
      }));
    } else {
      // Single select
      setFilters(prev => ({
        ...prev,
        [optionValue]: [itemValue]
      }));
      setOpenDropdown(null); // Close dropdown after selection for single select
    }
  };

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
                <div 
                  className={index % 2 === 0 ? "container2" : index % 3 === 0 ? "container17" : "container5"}
                  onClick={() => toggleDropdown(option.value)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={index % 2 === 0 ? "backgroundborder" : index % 3 === 0 ? "backgroundborder5" : "backgroundborder1"}>
                    <div className="container3">
                      <div className="select-employee-type-container">
                        <span>{option.label}</span>
                        {option.isMultiSelect && <span className="multi-select"> [Multi Select]</span>}
                        {filters[option.value]?.length > 0 && (
                          <span style={{ color: '#4B9EFD', marginLeft: '8px' }}>
                            ({filters[option.value].length} selected)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <img 
                    className={index % 2 === 0 ? "img-down-svg" : index % 3 === 0 ? "img-down-svg5" : "img-down-svg1"} 
                    alt="" 
                    src={downArrowIcon} 
                    style={{
                      transform: openDropdown === option.value ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s'
                    }}
                  />
                  
                  {/* Dropdown menu */}
                  {openDropdown === option.value && (
                    <div className="dropdown-menu">
                      {getDropdownItems(option.value).map(item => {
                        const isSelected = filters[option.value]?.includes(item.value);
                        return (
                          <div 
                            key={item.value}
                            className={`dropdown-item ${isSelected ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemSelect(option.value, item.value);
                            }}
                          >
                            {item.label}
                            {isSelected && (
                              <span className="checkmark">✓</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
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
