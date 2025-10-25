import { Text, View } from "react-native";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import Progress from "./Progress";
import Sector from "./Sector";
import Summary from "./Summary";

const RiderHome = () => {
  return (
    <View style={tw` flex-1 gap-4`}>
      {/* Summary */}
      <Card style={tw`gap-3`}>
        <Text style={tw`text-base font-medium`}>Today's Summary</Text>
        <Summary />
      </Card>
      <Progress />
      <Sector />
    </View>
  );
};

export default RiderHome;
