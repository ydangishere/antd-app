import React from 'react';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import './SearchBoxAntD.css';

const { Search } = Input;

interface SearchBoxAntDProps extends Omit<SearchProps, 'onSearch'> {
  onSearch?: (value: string) => void;
  width?: string | number;
}

const SearchBoxAntD: React.FC<SearchBoxAntDProps> = ({
  placeholder = "Search by Name, ID or Email",
  onSearch,
  width = 420,
  className = "",
  ...props
}) => {
  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  return (
    <div className={`search-box-antd-container ${className}`}>
      <Search
        placeholder={placeholder}
        onSearch={handleSearch}
        style={{ width }}
        enterButton
        allowClear
        {...props}
      />
    </div>
  );
};

export default SearchBoxAntD;
