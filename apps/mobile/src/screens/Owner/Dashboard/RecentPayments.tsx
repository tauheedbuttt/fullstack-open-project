import { Text, View } from "react-native";
import { IPayment } from "shared";
import { DownloadIcon } from "../../../../assets";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import tw from "../../../lib/tailwind";
import dayjs from "dayjs";
import { routes } from "../../../config/routeConfig";
import { useNavigate } from "react-router-native";

const RecentPayments = () => {
  const navigate = useNavigate();
  const payments: Pick<IPayment, "paymentId" | "paymentDate" | "amount">[] = [
    { paymentId: "1", paymentDate: "2024-06-01", amount: 150.0 },
    { paymentId: "2", paymentDate: "2024-06-03", amount: 200.0 },
    { paymentId: "3", paymentDate: "2024-06-05", amount: 175.0 },
  ];
  return (
    <Card>
      {/* Title */}
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-base`}>Recent Payments</Text>
        <Button
          text="View All"
          variant="text"
          style={tw`p-0 px-3`}
          textStyle={tw`text-sm`}
          onPress={() => navigate(routes.owner.payments)}
        />
      </View>
      {/* List of Recent Payments */}
      <View style={tw`mt-4 gap-2`}>
        {payments.map((payment) => (
          <Card
            key={payment.paymentId}
            style={tw`flex-row justify-between items-center p-3 bg-gray-50`}
          >
            {/* Download */}
            <View style={tw`flex-row items-center gap-3`}>
              <IconCard
                Icon={DownloadIcon}
                bgStyle={tw`bg-primary/10`}
                style={tw`text-theme`}
              />
              {/* Month and Date */}
              <View>
                <Text style={tw`font-medium text-base`}>
                  {dayjs(payment.paymentDate).format("MMMM D, YYYY")}
                </Text>
                <Text style={tw`text-xs text-gray-500`}>
                  {dayjs(payment.paymentDate).format("dddd")}
                </Text>
              </View>
            </View>
            {/* Amount */}
            <Text style={tw`font-bold text-base`}>
              ${payment.amount.toLocaleString()}
            </Text>
          </Card>
        ))}
      </View>
    </Card>
  );
};
export default RecentPayments;
