import { View } from "react-native";
import { PaidIcon } from "../../../../assets";
import tw from "../../../lib/tailwind";
import Payment from "./Payment";

const Today = () => {
  const payments = [
    {
      id: 1,
      owner: { name: "John Doe" },
      house: { houseId: "House-113" },
      paymentTime: new Date(),
      amount: 5000,
    },
    {
      id: 2,
      owner: { name: "John Doe" },
      house: { houseId: "House-113" },
      paymentTime: new Date(),
      amount: 5000,
    },
    {
      id: 3,
      owner: { name: "John Doe" },
      house: { houseId: "House-113" },
      paymentTime: new Date(),
      amount: 5000,
    },
    {
      id: 4,
      owner: { name: "John Doe" },
      house: { houseId: "House-113" },
      paymentTime: new Date(),
      amount: 5000,
    },
    {
      id: 5,
      owner: { name: "John Doe" },
      house: { houseId: "House-113" },
      paymentTime: new Date(),
      amount: 5000,
    },
  ];

  return (
    <View style={tw`gap-2`}>
      {payments.map((item) => (
        <Payment
          key={item.id}
          Icon={PaidIcon}
          title={item.owner.name}
          subtitle={item.house.houseId}
          time={item.paymentTime}
          amount={item.amount}
          iconCardVariant={"success"}
        />
      ))}
    </View>
  );
};

export default Today;
