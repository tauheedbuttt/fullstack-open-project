import { IHouse } from "./house.types";
import { ISector } from "./sector.types";

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
  house?: IHouse;
  createdAt: Date | string;
}

export interface IRidersResponse {
  riders: IUser[];
}

export interface IRidersQuery {
  search?: string;
  status?: string | IUserStatus;
}
