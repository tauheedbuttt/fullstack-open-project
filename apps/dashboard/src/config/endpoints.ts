import { IUserRole } from "shared";

export const endpoints = {
  auth: {
    login: `/auth/${IUserRole.ADMIN}/login`,
    forgot: `/auth/forgot`,
  },
};
