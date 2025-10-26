import { Text, View } from "react-native";
import { IPayment, IPaymentStatus } from "shared";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import { HistoryIcon } from "../../../../assets";
import tw from "../../../lib/tailwind";
import { paymentStatus } from "../../../config/constants";

const RecentActivity = () => {
  const payments: Pick<
    IPayment,
    "paymentId" | "paymentDate" | "amount" | "status"
  >[] = [
    {
      paymentId: "1",
      paymentDate: "1st Oct, 2025",
      amount: 500,
      status: IPaymentStatus.COMPLETED,
    },
    {
      paymentId: "2",
      paymentDate: "1st Sep, 2023",
      amount: 450,
      status: IPaymentStatus.COMPLETED,
    },
    {
      paymentId: "3",
      paymentDate: "1st Aug, 2023",
      amount: 400,
      status: IPaymentStatus.PENDING,
    },
    {
      paymentId: "4",
      paymentDate: "1st Jul, 2023",
      amount: 350,
      status: IPaymentStatus.COMPLETED,
    },
  ];
  return (
    <View style={tw`flex-col gap-2`}>
      {payments.map((payment) => (
        <Card
          key={payment.paymentId}
          style={tw`flex-row items-center justify-between p-3`}
        >
          {/* Icon */}
          <IconCard
            Icon={HistoryIcon}
            style={tw`text-green-600`}
            bgStyle={tw`bg-green-100`}
          />
          {/* Date */}
          <View style={tw`flex-1 px-4`}>
            <Text style={tw`font-medium text-base`}>Monthly Payments</Text>
            <Text style={tw`text-secondary text-sm`}>
              {payment.paymentDate}
            </Text>
          </View>
          <View>
            <Text style={tw`font-medium text-base`}>PKR {payment.amount}</Text>
            <Text
              style={tw.style(
                `text-secondary text-sm`,
                paymentStatus[payment.status]
              )}
            >
              {payment.status}
            </Text>
          </View>
          {/* Amount */}
        </Card>
      ))}
    </View>
  );
};

export default RecentActivity;
