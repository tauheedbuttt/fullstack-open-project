import { View, Text } from "react-native";
import tw from "../../lib/tailwind";

export default function ForgetPasswordScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-medium`}>ForgetPasswordScreen</Text>
    </View>
  );
}
