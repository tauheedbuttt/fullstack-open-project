import { Link, useLocation } from "react-router-dom";
import { routes } from "../../config/routeConfig";
import {
  CardIcon,
  DashboardIcon,
  HouseIcon,
  OwnersIcon,
  ReportIcon,
  RiderIcon,
  SettingIcon,
} from "../../assets";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();

  const pages = [
    {
      name: "Dashboard",
      route: routes.dashboard,
      icon: DashboardIcon,
    },
    {
      name: "Riders",
      route: routes.riders,
      icon: RiderIcon,
    },
    {
      name: "Owners",
      route: routes.owners,
      icon: OwnersIcon,
    },
    {
      name: "Houses",
      route: routes.houses,
      icon: HouseIcon,
    },
    {
      name: "Payments",
      route: routes.payments,
      icon: CardIcon,
    },
    {
      name: "Reports",
      route: routes.reports,
      icon: ReportIcon,
    },
    {
      name: "Settings",
      route: routes.settings,
      icon: SettingIcon,
    },
  ];
  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col br-0">
      {/* Header */}
      <Link
        to={routes.dashboard}
        className="px-5 py-6 border-b border-gray-100 flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          D
        </div>
        <div className="flex flex-col gap-[0.5]">
          <span className="text-primary">D-12 Admin</span>
          <span className="text-secondary text-sm">Fee Management</span>
        </div>
      </Link>
      {/* Pages */}
      <nav className="p-4 flex flex-col gap-2 overflow-y-auto flex-1">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.route}
            className={clsx(
              "flex gap-2 items-center px-4 active:shadow-sm py-3 text-gray-700 rounded-lg active:bg-primary active:text-white",
              location.pathname === page.route
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            )}
          >
            {<page.icon />}
            {page.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
