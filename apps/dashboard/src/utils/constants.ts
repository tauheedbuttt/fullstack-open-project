import { IUserStatus } from "shared";

export const userStatusChip = {
  [IUserStatus.ACTIVE]: "bg-green-100 text-green-800",
  [IUserStatus.INACTIVE]: "bg-red-100 text-red-800",
};
