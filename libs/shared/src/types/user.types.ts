import { ISector } from "./sector.types.js";

export enum IUserStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export enum IUserRole {
  ADMIN = "Admin",
  RIDER = "Rider",
  OWNER = "Owner",
}

export interface IUser {
  id: number;
  userId: string;
  name: string;
  phone: string;
  email: string;
  cnic: string;
  address: string;
  status: IUserStatus;
  role: IUserRole;
  sector?: ISector;
  createdAt: string;
}
