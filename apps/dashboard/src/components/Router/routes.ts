import { routes } from "../../config/routeConfig";
import Login from "../../pages/Auth/Login";
import Dashboard from "../../pages/Dashboard";
import Houses from "../../pages/Houses";
import Payments from "../../pages/Payments";
import Reports from "../../pages/Reports";
import Riders from "../../pages/Riders";
import Settings from "../../pages/Settings";

export const dashboardRoutes = [
  {
    path: routes.dashboard,
    element: Dashboard,
  },
  {
    path: routes.houses,
    element: Houses,
  },
  {
    path: routes.payments,
    element: Payments,
  },
  {
    path: routes.reports,
    element: Reports,
  },
  {
    path: routes.riders,
    element: Riders,
  },
  {
    path: routes.settings,
    element: Settings,
  },
];

export const authRoutes = [
  {
    path: routes.login,
    element: Login,
  },
];
