import React, { useState, useMemo } from 'react';
import { List, Input, Button } from 'antd';
import { UserListFilter } from './UserListFilter';
import { RefreshUsersButton } from './RefreshUsersButton';
import { UserCard } from './UserCard';
import { useUsers, useRefreshUsers } from '../hooks/useUsers';

const filterUsers = (users, filter) => {
  return users?.filter((user) => {
    const userString =
      `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase();

    return userString.includes(filter.toLowerCase());
  });
};

export const useUsersListApi = () => {
  const { data: users, isLoading } = useUsers();
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(
    () => filterUsers(users, filter),
    [users, filter]
  );

  return {
    isLoading,
    filter,
    handleFilterChange: setFilter,
    users: filteredUsers,
  };
};

export const UserList = React.memo(() => {
  const { isLoading, filter, handleFilterChange, users } = useUsersListApi();

  return (
    <div>
      <UserListFilter filter={filter} onFilterChange={handleFilterChange} />
      <RefreshUsersButton />
      <List
        loading={isLoading}
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <UserCard user={user} />
          </List.Item>
        )}
      />
    </div>
  );
});
