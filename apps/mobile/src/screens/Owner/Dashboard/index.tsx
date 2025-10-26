import { View } from "react-native";
import Overview from "./Overview";
import Stats from "./Stats";
import RecentPayments from "./RecentPayments";
import YearlyOverview from "./YearlyOverview";
import DuePayment from "./DuePayment";
import tw from "../../../lib/tailwind";

const Dashboard = () => {
  return (
    <View style={tw`flex-col gap-4`}>
      <Overview />
      <Stats />
      <YearlyOverview />
      <RecentPayments />
      <DuePayment />
    </View>
  );
};

export default Dashboard;
