import { ISector } from "./sector.types";
import { IUser } from "./user.types";

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
