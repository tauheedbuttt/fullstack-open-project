import { ClockIcon } from "../../../../assets";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import { Text, View } from "react-native";

// Latest payment
const Payment = () => {
  return (
    <Card style={tw`bg-primary`}>
      {/* Month and Status */}
      <View style={tw`flex-row justify-between items-start`}>
        {/* Month and amount */}
        <View>
          <Text style={tw`text-sm text-white/80`}>October 2025</Text>
          <Text style={tw`text-xl text-white font-bold`}>PKR 500</Text>
        </View>
        {/* Status */}
        <Card style={tw`bg-white/10 p-0 px-3 py-1 rounded-full`}>
          <Text style={tw`text-xs text-white`}>Pending</Text>
        </Card>
      </View>
      {/* Due Date */}
      <View style={tw`my-7 flex-row items-center gap-2`}>
        <ClockIcon style={tw`text-white/80`} height={18} width={18} />
        <Text style={tw`text-sm text-white/80 `}>
          Due Date: 31st October 2025
        </Text>
      </View>
      {/* Pay */}
      <Button
        variant="white"
        text="Pay Now"
        textStyle={tw`font-semibold`}
        style={tw`rounded-full`}
      />
    </Card>
  );
};

export default Payment;
