import { CHECKLOGIN, LOGOUT } from "./login.type";

export const signIn = (foundUser) => ({
  type: CHECKLOGIN,
  payload: foundUser,
});

export const signOut = () => ({
  type:LOGOUT,
});
