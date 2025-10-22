import { routes } from "../config/routeConfig";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import SplashScreen from "../screens/Onboarding/SplashScreen";
import { Route } from "../types/route";

export const onboardingRoutes: Route[] = [
  {
    route: routes.onboarding.splash,
    element: SplashScreen,
  },
  {
    route: routes.onboarding.onboarding,
    element: OnboardingScreen,
  },
];

export const authRoutes: Route[] = [
  {
    route: routes.auth.login,
    element: LoginScreen,
  },
  {
    route: routes.auth.forgetPassword,
    element: ForgetPasswordScreen,
  },
];
