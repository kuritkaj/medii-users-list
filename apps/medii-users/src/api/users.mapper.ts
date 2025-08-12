export const mapGetUsersApiResponseToModel = ({
  data,
}: GetUsersApiResponse) => {
  return data.map((user: ApiUser) => ({
    id: user.uuid,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    image: user.avatar.url,
  }));
};
