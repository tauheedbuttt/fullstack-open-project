import { Text, View } from "react-native";
import { ClockIcon } from "../../../../assets";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import tw from "../../../lib/tailwind";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-native";
import { routes } from "../../../config/routeConfig";

const DuePayment = () => {
  const navigate = useNavigate();
  const onPayNow = () => {
    navigate(routes.owner.payment);
  };
  return (
    <Card style={tw`bg-blue flex-row items-start gap-2`}>
      <IconCard
        Icon={ClockIcon}
        bgStyle={tw`bg-white/20`}
        style={tw`text-white`}
      />
      <View style={tw`flex-1 gap-1 items-start`}>
        <Text style={tw`text-white font-bold text-base`}>Next Payment Due</Text>
        <Text style={tw`text-white text-sm`}>
          Your next payment of ₹5,000 is due on Oct 5, 2025
        </Text>
        <Button
          text="Pay Now"
          variant="white"
          style={tw`py-2 px-3`}
          textStyle={tw`text-sm text-blue font-bold`}
          onPress={onPayNow}
        />
      </View>
    </Card>
  );
};

export default DuePayment;
