import { Text, View } from "react-native";
import tw from "../../lib/tailwind";
import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import Logo from "../../components/Logo";
import { routes } from "../../config/routeConfig";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routes.onboarding.onboarding);
    }, 2000);
  }, [navigate]);

  return (
    <View
      style={tw`flex-1 justify-center items-center bg-white flex-col flex gap-2 bg-primary/5`}
    >
      {/* Logo */}
      <Logo size={"lg"} />
      {/* Title */}
      <Text style={tw`text-xl font-bold text-primary`}>Security App</Text>
      {/* Description */}
      <Text style={tw`text-lg font-bold text-secondary`}>
        Smart Community Fee Management
      </Text>
    </View>
  );
};

export default SplashScreen;
