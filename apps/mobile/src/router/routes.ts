import { routes } from "../config/routeConfig";
import OnboardingScreen from "../screens/OnboardingScreen";
import SplashScreen from "../screens/SplashScreen";

export const onboardingRoutes = [
  {
    route: routes.onboarding.splash,
    element: SplashScreen,
  },
  {
    route: routes.onboarding.onboarding,
    element: OnboardingScreen,
  },
];
