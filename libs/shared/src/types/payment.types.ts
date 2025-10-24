import { IHouse } from "./house.types";
import { IUser } from "./user.types";

export enum IPaymentStatus {
  PENDING = "Pending",
  COMPLETED = "Completed",
}

export enum IPaymentDuration {
  QUARTER = "Quarter",
  MONTH = "Month",
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

export interface IPaymentDurationOptions {
  number: number;
  year: number;
  type: IPaymentDuration;
}
