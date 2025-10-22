import { View, Text } from "react-native";
import tw from "../lib/tailwind";

const OnboardingScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white `}>
      <Text style={tw`text-2xl font-bold text-theme`}>OnboardingScreen</Text>
    </View>
  );
};

export default OnboardingScreen;
