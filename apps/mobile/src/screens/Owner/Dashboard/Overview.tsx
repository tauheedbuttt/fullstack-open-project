import { Text, View } from "react-native";
import tw from "../../../lib/tailwind";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import { PaidIcon } from "../../../../assets";

const Overview = () => {
  return (
    <Card style={tw` bg-green-600 `}>
      <View style={tw` flex-row justify-between items-center `}>
        <Text style={tw` text-white `}>TOTAL AMOUNT PAID</Text>
        <IconCard
          Icon={PaidIcon}
          bgStyle={tw` bg-white/20 `}
          style={tw` text-white `}
        />
      </View>
      <Text style={tw` text-white text-2xl font-bold mt-2 `}>$12,000</Text>
      <Text style={tw` text-white/80 mt-1 text-sm`}>3 payments completed</Text>
    </Card>
  );
};

export default Overview;
