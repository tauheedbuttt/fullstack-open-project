import { View, Text } from "react-native";
import tw from "../../lib/tailwind";

export default function LoginScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-medium`}>LoginScreen</Text>
    </View>
  );
}
