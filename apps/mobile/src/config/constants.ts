import { IPaymentStatus } from "shared";

export const paymentStatus = {
  [IPaymentStatus.COMPLETED]: "text-green-600",
  [IPaymentStatus.PENDING]: "text-theme",
};

export const paymentStatusChip = {
  [IPaymentStatus.COMPLETED]: {
    text: "text-green-600",
    background: "bg-green-100",
  },
  [IPaymentStatus.PENDING]: {
    text: "text-theme",
    background: "bg-primary/10",
  },
};
