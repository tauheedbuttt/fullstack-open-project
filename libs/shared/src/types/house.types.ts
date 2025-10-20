export enum IHouseStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}
export interface IHouse {
  houseId: string;
  status: IHouseStatus;
}
