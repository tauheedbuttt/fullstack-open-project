import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import LogoData from "../../components/LogoData";
import { routes } from "../../config/routeConfig";
import tw from "../../lib/tailwind";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routes.onboarding.onboarding);
    }, 2000);
  }, [navigate]);

  return (
    <LogoData
      style={tw`flex-1 `}
      title="Security App"
      description="Smart Community Fee Management"
    />
  );
};

export default SplashScreen;
