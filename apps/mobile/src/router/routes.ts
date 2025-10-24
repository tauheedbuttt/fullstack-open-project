import { routes } from "../config/routeConfig";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import SplashScreen from "../screens/Onboarding/SplashScreen";
import OwnerHome from "../screens/Owner/Home";
import Payments from "../screens/Owner/Payments";
import OwnerProfile from "../screens/Owner/Profile";
import Dashboard from "../screens/Owner/Dashboard";
import Collections from "../screens/Rider/Collections";
import RiderHome from "../screens/Rider/Home";
import Houses from "../screens/Rider/Houses";
import RiderProfile from "../screens/Rider/Profile";
import { Route } from "../types/route";
import EditProfile from "../screens/EditProfile";

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

export const sharedRoutes: Route[] = [
  {
    route: routes.shared.editProfile,
    element: EditProfile,
    title: "Edit Profile",
    subtitle: "Update your information",
    back: true,
  },
];

export const ownerRoutes: Route[] = [
  ...sharedRoutes,
  {
    route: routes.owner.home,
    element: OwnerHome,
    variant: "owner-home",
  },
  {
    route: routes.owner.payments,
    element: Payments,
    title: "Payments",
    subtitle: "Track all your fee payments",
  },
  {
    route: routes.owner.dashboard,
    element: Dashboard,
    title: "Dashboard",
    subtitle: "View your payment statistics",
  },
  {
    route: routes.owner.profile,
    element: OwnerProfile,
    title: "Profile",
    subtitle: "Manage your account",
  },
];

export const riderRoutes: Route[] = [
  ...sharedRoutes,
  {
    route: routes.rider.home,
    element: RiderHome,
    variant: "rider-home",
  },
  {
    route: routes.rider.houses,
    element: Houses,
    title: "Assigned Houses",
    variant: "rider-houses",
  },
  {
    route: routes.rider.collections,
    element: Collections,
    title: "Collections",
    subtitle: "Track your collection history",
  },
  {
    route: routes.rider.profile,
    element: RiderProfile,
    title: "Profile",
    subtitle: "Manage your account",
  },
];
