import { IPaymentStatus } from "shared";

export const paymentStatus = {
  [IPaymentStatus.COMPLETED]: "text-green-600",
  [IPaymentStatus.PENDING]: "text-theme",
};
