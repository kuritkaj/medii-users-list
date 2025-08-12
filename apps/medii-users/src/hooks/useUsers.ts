import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers } from '../api/users';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};

export const useRefreshUsers = () => {
  const queryClient = useQueryClient();

  const refreshUsers = async () => {
    await queryClient.invalidateQueries({ queryKey: ['users'] });
  };

  return refreshUsers;
};
