import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import LogoData from "../../components/LogoData";
import { routes } from "../../config/routeConfig";
import tw from "../../lib/tailwind";
import useAuth from "../../hooks/useAuth";
import { IUserRole } from "shared";
import { View } from "react-native";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.role) {
      const isOwner = auth.role === IUserRole.OWNER;
      navigate(isOwner ? routes.owner.home : routes.rider.home);
      return;
    }
    setTimeout(() => {
      navigate(routes.onboarding.onboarding);
    }, 2000);
  }, [navigate, auth]);

  return (
    <View style={tw`flex-1 items-center justify-center `}>
      <LogoData
        title="Security App"
        description="Smart Community Fee Management"
      />
    </View>
  );
};

export default SplashScreen;
