import { View } from "react-native";
import { CalendarIcon } from "../../../../assets";
import tw from "../../../lib/tailwind";
import Payment from "./Payment";
import dayjs from "dayjs";

const ThisWeek = () => {
  const payments = [
    {
      id: 1,
      date: new Date(),
      count: 3,
      amount: 15000,
    },
    {
      id: 2,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      count: 2,
      amount: 9000,
    },
    {
      id: 3,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      count: 4,
      amount: 20000,
    },
    {
      id: 4,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      count: 1,
      amount: 6500,
    },
    {
      id: 5,
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      count: 2,
      amount: 10000,
    },
  ];
  return (
    <View style={tw`gap-2`}>
      {payments.map((item) => (
        <Payment
          key={item.id}
          Icon={CalendarIcon}
          title={dayjs(item.date).format("MM D, YYYY")}
          subtitle={`${item.count} collections`}
          amount={item.amount}
        />
      ))}
    </View>
  );
};

export default ThisWeek;
