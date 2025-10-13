import { UserTokenDto } from "./user-token.dto.type";

export type GlobalState = {
  userToken: UserTokenDto | undefined;
  theme: string;
  ip: string | undefined;
};

export const defaultGlobalState: GlobalState = {
  userToken: undefined,
  theme: "light",
  ip: undefined,
};
