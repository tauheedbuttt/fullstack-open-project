import { Text, View } from "react-native";
import tw from "../../../lib/tailwind";
import BaseHomeHeader from "./BaseHomeHeader";
import { routes } from "../../../config/routeConfig";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setSearch } from "../../../features/searchSlice";

export type AppVariants =
  | "owner-home"
  | "rider-home"
  | "normal"
  | "rider-houses";

export interface AppHeaderProps {
  variant?: AppVariants;
  title?: string;
  subtitle?: string;
}

const AppHeader = ({ variant = "normal", title, subtitle }: AppHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const renderHeader = () => {
    switch (variant) {
      case "rider-home":
        return (
          <BaseHomeHeader route={routes.rider.profile} variant={variant} />
        );
      case "owner-home":
        return (
          <BaseHomeHeader route={routes.owner.profile} variant={variant} />
        );
      default:
        return (
          <>
            <Text style={tw`font-medium text-xl`}>{title}</Text>
            {subtitle && (
              <Text style={tw`text-secondary text-sm`}>{subtitle}</Text>
            )}

            {variant === "rider-houses" && (
              <Input
                placeholder="Search by name, house ID or address"
                style={tw`mt-3`}
                variant="search"
                onChangeText={(text) => dispatch(setSearch(text))}
              />
            )}
          </>
        );
    }
  };
  return (
    <View
      style={tw.style(
        `min-h-18 w-full px-5 py-1 pb-5 gap-1 bg-white rounded-b-3xl `,
        variant === "rider-home" && "bg-primary"
      )}
    >
      {renderHeader()}
    </View>
  );
};

export default AppHeader;
