import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { useLocation, useNavigate } from "react-router-native";
import { IUserRole } from "shared";
import {
  DashboardIcon,
  DollarIcon,
  HouseIcon,
  LocationIcon,
  UserIcon,
  WalletIcon,
} from "../../../assets";
import { routes } from "../../config/routeConfig";
import useAuth from "../../hooks/useAuth";
import tw from "../../lib/tailwind";

interface Tab {
  label: string;
  icon: React.FC<SvgProps>;
  route: string;
  stack?: string[];
}

const TabBar = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const ownerTabs: Tab[] = [
    { label: "Home", icon: HouseIcon, route: routes.owner.home },
    { label: "Dashboard", icon: DashboardIcon, route: routes.owner.dashboard },
    {
      label: "Payments",
      icon: WalletIcon,
      route: routes.owner.payments,
      stack: [routes.owner.payment],
    },
    {
      label: "Profile",
      icon: UserIcon,
      route: routes.owner.profile,
      stack: [routes.shared.editProfile],
    },
  ];
  const riderTabs: Tab[] = [
    { label: "Home", icon: HouseIcon, route: routes.rider.home },
    { label: "Houses", icon: LocationIcon, route: routes.rider.houses },
    { label: "Collections", icon: DollarIcon, route: routes.rider.collections },
    { label: "Profile", icon: UserIcon, route: routes.rider.profile },
  ];

  const tabs = (auth.role === IUserRole.OWNER ? ownerTabs : riderTabs).map(
    (item) => {
      const stack = [item.route, ...(item.stack || [])];
      return {
        ...item,
        stack,
        isActive: stack.includes(location.pathname),
      };
    }
  );

  const handlePress = (route: string) => {
    navigate(route);
  };

  return (
    <View
      style={tw`w-full flex-row justify-around items-center border-t border-gray-200 bg-white px-1`}
    >
      {tabs.map(({ icon: Icon, ...tab }) => (
        <TouchableOpacity
          key={tab.route}
          style={tw`flex-col items-center gap-2  px-5 pb-6 pt-4`}
          onPress={() => handlePress(tab.route)}
        >
          <Icon style={tab.isActive ? tw`text-theme` : tw`text-secondary`} />
          <Text style={tab.isActive ? tw`text-theme` : tw`text-secondary`}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;
