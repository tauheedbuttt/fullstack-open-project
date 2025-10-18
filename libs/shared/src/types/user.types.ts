export enum IUserStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}
export interface IUser {
  id: number;
  name: string;
  email: string;
}
