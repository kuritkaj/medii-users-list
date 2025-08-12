export type ApiUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: {
    url: string;
  };
};

export type ApiUsersList = ApiUser[];
export type GetUsersApiResponse = {
  data: ApiUsersList;
};
