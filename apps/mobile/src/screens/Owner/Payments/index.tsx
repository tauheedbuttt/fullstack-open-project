import { View } from "react-native";
import Payment from "../Home/Payment";
import { IPayment, IPaymentStatus } from "shared";
import { useState } from "react";
import Tabs from "../../../components/Tabs";
import tw from "../../../lib/tailwind";

const Payments = () => {
  const tabs = ["This Month", "Previous Months"];
  const [tab, setTab] = useState(tabs[0]);

  const thisMonthPayment: Pick<
    IPayment,
    "paymentId" | "amount" | "status" | "paymentDate"
  > = {
    paymentId: "pay_001",
    amount: 1500,
    status: IPaymentStatus.PENDING,
    paymentDate: "2024-06-15",
  };
  const previousPayments: Pick<
    IPayment,
    "paymentId" | "amount" | "status" | "paymentDate"
  >[] = [
    {
      paymentId: "pay_002",
      amount: 1200,
      status: IPaymentStatus.COMPLETED,
      paymentDate: "2024-05-15",
    },
    {
      paymentId: "pay_003",
      amount: 1300,
      status: IPaymentStatus.COMPLETED,
      paymentDate: "2024-04-15",
    },
  ];

  const payments = tab === "This Month" ? [thisMonthPayment] : previousPayments;

  return (
    <View style={tw`gap-5`}>
      <Tabs tabs={tabs} activeTab={tab} onTabChange={setTab} />
      {payments.map((payment) => (
        <Payment key={payment.paymentId} variant={"light"} {...payment} />
      ))}
    </View>
  );
};

export default Payments;
