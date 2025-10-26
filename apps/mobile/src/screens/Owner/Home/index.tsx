import { Text, View } from "react-native";
import { IPayment, IPaymentStatus } from "shared";
import tw from "../../../lib/tailwind";
import Payment from "./Payment";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

const OwnerHome = () => {
  const thisMonthPayment: Pick<
    IPayment,
    "paymentId" | "amount" | "status" | "paymentDate"
  > = {
    paymentId: "pay_001",
    amount: 1500,
    status: IPaymentStatus.PENDING,
    paymentDate: "2024-06-15",
  };
  return (
    <View style={tw`flex-1 flex-col gap-5`}>
      <Payment {...thisMonthPayment} />
      <View style={tw`flex-col gap-3`}>
        <Text style={tw`text-lg font-semibold`}>Quick Actions</Text>
        <QuickActions />
      </View>
      <View style={tw`flex-col gap-3`}>
        <Text style={tw`text-lg font-semibold`}>Recent Activity</Text>
        <RecentActivity />
      </View>
    </View>
  );
};

export default OwnerHome;
