import { Text, View } from "react-native";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import { CalendarIcon, TrendIcon } from "../../../../assets";
import IconCard from "../../../components/IconCard";

const statsData = [
  {
    icon: (
      <IconCard
        Icon={CalendarIcon}
        bgStyle={tw`bg-blue/10`}
        style={tw`text-blue`}
      />
    ),
    label: "Next Payment",
    value: "₹5000",
    subtitle: "Oct 5, 2025",
  },
  {
    icon: (
      <IconCard
        Icon={TrendIcon}
        bgStyle={tw`bg-green-100`}
        style={tw`text-green-600`}
      />
    ),
    label: "On-Time",
    value: "3/3",
    subtitle: "100% Record",
  },
];

const Stats = () => {
  return (
    <View style={tw`flex-row gap-5`}>
      {statsData.map(({ icon, ...item }) => (
        <Card style={tw`flex-1 gap-3`} key={item.label}>
          <View style={tw`flex-row`}>{icon}</View>
          <View style={tw`flex-col gap-1`}>
            <Text style={tw`font-light text-xs`}>{item.label}</Text>
            <Text style={tw`font-medium text-base`}>{item.value}</Text>
            <Text style={tw`text-secondary text-xs`}>{item.subtitle}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default Stats;
