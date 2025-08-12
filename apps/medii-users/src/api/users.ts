import axios from 'axios';
import type { GetUsersApiResponse } from './user.types';
import { mapGetUsersApiResponseToModel } from './users.mapper';
const api = axios.create({
  baseURL: 'https://fakerapi.it/api/v2',
});

export const getUsers = async () => {
  const response = await api.get<GetUsersApiResponse>('/custom', {
    params: {
      _quantity: 20,
      _locale: 'cs_CZ',
      uuid: 'uuid',
      first_name: 'firstName',
      last_name: 'lastName',
      email: 'email',
      avatar: 'image',
    },
  });

  return mapGetUsersApiResponseToModel(response.data);
};
