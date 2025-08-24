import React, { useState } from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search by Name, ID or Email",
  onSearch,
  onChange,
  className = ""
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange?.(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(searchValue);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(searchValue);
  };

  return (
    <div className={`search-box-container ${className}`}>
      <div className="backgroundborder-parent">
        <div className="backgroundborder">
          <div className="rectangle"></div>
          <div className="input">
            <div className="container">
              <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
        <div className="overlay-icon" onClick={handleSearchClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
              stroke="#666"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
