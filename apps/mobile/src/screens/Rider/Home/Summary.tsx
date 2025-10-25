import { Text, View } from "react-native";
import IconCard from "../../../components/IconCard";
import { ClockIcon, HouseIcon, WalletIcon } from "../../../../assets";
import tw from "../../../lib/tailwind";

const Summary = () => {
  const summaryData = [
    {
      label: "Houses Assigned",
      value: 24,
      Icon: HouseIcon,
      bgStyle: tw`bg-primary/10`,
      style: tw`text-theme`,
    },
    {
      label: "Collected Today",
      value: "₹15,000",
      Icon: WalletIcon,
      bgStyle: tw`bg-green-100`,
      style: tw`text-green-600`,
    },
    {
      label: "Pending Collections",
      value: 8,
      Icon: ClockIcon,
      bgStyle: tw`bg-danger/10`,
      style: tw`text-danger`,
    },
  ];

  return (
    <View style={tw`gap-2`}>
      {summaryData.map((item) => (
        <View key={item.label} style={tw`flex-row gap-3 items-center`}>
          <IconCard
            Icon={(props) => <item.Icon {...props} height={23} width={23} />}
            bgStyle={tw.style("p-2", item.bgStyle)}
            style={tw.style("p-2", item.style)}
          />
          <View>
            <Text style={tw`text-sm text-secondary`}>{item.label}</Text>
            <Text style={tw`text-base font-medium`}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Summary;
