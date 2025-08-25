import React, { useState } from 'react';
import { Input } from 'antd';
import overlayIcon from '../assets/Overlay.svg';
import './SearchBoxAntD.css';

interface SearchBoxAntDProps {
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const SearchBoxAntD: React.FC<SearchBoxAntDProps> = ({
  placeholder = "Search by Name, ID or Email",
  onSearch,
  onChange,
  width = 420,
  className = "",
  style,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(value);
  };

  return (
    <div className={`group-parent ${className}`} style={{ width, ...style }}>
      <div className="backgroundborder-parent">
        <div className="backgroundborder">
          <div className="rectangle"></div>
          <div className="input">
            <div className="container">
              <input
                type="text"
                className="search-input"
                placeholder=""
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <div className="placeholder-text">{value ? '' : placeholder}</div>
            </div>
          </div>
        </div>
        <img 
          className="overlay-icon" 
          alt="" 
          src={overlayIcon}
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
};

export default SearchBoxAntD;
