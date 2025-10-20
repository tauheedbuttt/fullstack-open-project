import { ISector } from "./sector.types.js";
import { IUser } from "./user.types.js";

export enum IHouseStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}
export interface IHouse {
  houseId: string;
  status: IHouseStatus;
  address: string;
  sector: ISector;
  plotSize: string;
  rider: IUser;
  fee: number;
  owner: IUser;
}
