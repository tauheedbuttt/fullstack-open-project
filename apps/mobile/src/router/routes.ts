import { routes } from "../config/routeConfig";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import SplashScreen from "../screens/Onboarding/SplashScreen";
import OwnerHome from "../screens/Owner/Home";
import Payments from "../screens/Owner/Payments";
import OwnerProfile from "../screens/Owner/Profile";
import Receipts from "../screens/Owner/Receipts";
import Collections from "../screens/Rider/Collections";
import RiderHome from "../screens/Rider/Home";
import Houses from "../screens/Rider/Houses";
import RiderProfile from "../screens/Rider/Profile";
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

export const ownerRoutes: Route[] = [
  {
    route: routes.owner.home,
    element: OwnerHome,
  },
  {
    route: routes.owner.payments,
    element: Payments,
  },
  {
    route: routes.owner.receipts,
    element: Receipts,
  },
  {
    route: routes.owner.profile,
    element: OwnerProfile,
  },
];

export const riderRoutes: Route[] = [
  {
    route: routes.rider.home,
    element: RiderHome,
  },
  {
    route: routes.rider.houses,
    element: Houses,
  },
  {
    route: routes.rider.collections,
    element: Collections,
  },
  {
    route: routes.rider.profile,
    element: RiderProfile,
  },
];
