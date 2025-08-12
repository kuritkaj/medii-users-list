import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import { useRefreshUsers } from '../hooks/useUsers';

export const RefreshUsersButton = () => {
  const refreshUsers = useRefreshUsers();

  return (
    <Button style={{ margin: '10px 0' }} onClick={refreshUsers}>
      Obnovit data
    </Button>
  );
};
