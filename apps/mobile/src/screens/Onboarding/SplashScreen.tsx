import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import LogoData from "../../components/LogoData";
import { routes } from "../../config/routeConfig";
import tw from "../../lib/tailwind";
import useAuth from "../../hooks/useAuth";
import { IUserRole } from "shared";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (auth) {
        const isOwner = auth.role === IUserRole.OWNER;
        navigate(isOwner ? routes.owner.home : routes.rider.home);
      } else {
        navigate(routes.onboarding.onboarding);
      }
    }, 2000);
  }, [navigate, auth]);

  return (
    <LogoData
      style={tw`flex-1 `}
      title="Security App"
      description="Smart Community Fee Management"
    />
  );
};

export default SplashScreen;
