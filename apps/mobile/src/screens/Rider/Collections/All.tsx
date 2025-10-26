import { Text, View } from "react-native";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import ProgressBar from "../../../components/ProgressBar";
import dayjs from "dayjs";

const All = () => {
  const payments = [
    {
      id: 1,
      title: "Payment Received",
      subtitle: "Customer A",
      time: new Date("2025-10-10T09:30:00"),
      amount: 2500,
      total: 25,
      completed: 9,
    },
    {
      id: 2,
      title: "Payment Due",
      subtitle: "Customer B",
      time: new Date("2025-10-11T14:45:00"),
      amount: 4000,
      total: 30,
      completed: 22,
    },
    {
      id: 3,
      title: "Payment Received",
      subtitle: "Customer C",
      time: new Date("2025-10-12T11:15:00"),
      amount: 1200,
      total: 44,
      completed: 28,
    },
  ].map((item) => ({
    ...item,
    percentage: Number(((item.completed / item.total) * 100).toFixed(0)),
  }));
  return (
    <View style={tw`gap-3`}>
      {payments.map((item) => (
        <Card key={item.id} style={tw`gap-2`}>
          {/* title */}
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-base`}>
              {dayjs(item.time).format("M YYYY")}
            </Text>
            <Text style={tw`text-sm`}>
              {item.completed}/{item.total}
            </Text>
          </View>
          {/* value */}
          <Text style={tw`text-xl font-medium`}>
            PKR {item.amount.toLocaleString()}
          </Text>
          {/* progress */}
          <ProgressBar percentage={item.percentage} />
          {/* percentage */}
          <Text style={tw`text-xs text-secondary`}>
            {item.percentage}% completion rate
          </Text>
        </Card>
      ))}
    </View>
  );
};

export default All;
