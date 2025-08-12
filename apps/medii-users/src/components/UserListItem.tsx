import React from 'react';
import { Card, Avatar, List } from 'antd';

interface UserListItemProps {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  };
}

export const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={user.image} size={64} />}
        title={`${user.firstName} ${user.lastName}`}
        description={user.email}
      ></List.Item.Meta>
    </List.Item>
  );
};
