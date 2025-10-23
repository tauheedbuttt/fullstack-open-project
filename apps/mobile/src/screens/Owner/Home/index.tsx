import { Text, View } from "react-native";
import Payment from "./Payment";
import QuickActions from "./QuickActions";
import tw from "../../../lib/tailwind";
import RecentActivity from "./RecentActivity";

const OwnerHome = () => {
  return (
    <View style={tw`flex-1 flex-col gap-5`}>
      <Payment />
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
