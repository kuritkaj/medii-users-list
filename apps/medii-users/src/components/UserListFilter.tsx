import React from 'react';
import { Input } from 'antd';

export interface UserListFilterProps {
  filter: string;
  onFilterChange(filter: change): void;
}

export const UserListFilter: React.FC<UserListFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <Input
      style={{ margin: '10px 0' }}
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Filtrujte uživatele"
    />
  );
};
