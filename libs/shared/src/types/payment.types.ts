import { IHouse } from "./house.types.js";
import { IUser } from "./user.types.js";

export enum IPaymentStatus {
  PENDING = "Pending",
  COMPLETED = "Completed",
}

export interface IPayment {
  paymentId: string;
  userId: string;
  houseId: string;
  amount: number;
  paymentDate: string; // ISO date string
  status: IPaymentStatus;
  owner: IUser;
  house: IHouse;
  rider: IUser;
  recieptNumber?: string;
  collectionTime?: string; // ISO date string
}
