export type UserDto = {
  id: string;
  email: string;
  name: string;
}
export type UserTokenDto = {
  user: UserDto;
  token: string;
};
