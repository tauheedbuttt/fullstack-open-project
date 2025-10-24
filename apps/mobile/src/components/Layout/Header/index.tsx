import { Text, View } from "react-native";
import tw from "../../../lib/tailwind";
import BaseHomeHeader from "./BaseHomeHeader";
import { routes } from "../../../config/routeConfig";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setSearch } from "../../../features/searchSlice";
import Button from "../../Button";
import { useNavigate } from "react-router-native";

export type AppVariants =
  | "owner-home"
  | "rider-home"
  | "normal"
  | "rider-houses";

export interface AppHeaderProps {
  variant?: AppVariants;
  title?: string;
  subtitle?: string;
  back?: boolean;
  noTabBar?: boolean;
}

const AppHeader = ({
  variant = "normal",
  title,
  subtitle,
  back,
}: AppHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

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
          <View style={tw`w-full flex-col gap-2`}>
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
          </View>
        );
    }
  };
  return (
    <View
      style={tw.style(
        `flex-row items-center gap-3 min-h-18 w-full px-5 py-1 pb-5 bg-white rounded-b-3xl `,
        variant === "rider-home" && "bg-primary"
      )}
    >
      {back && (
        <Button
          text="←"
          variant="secondary"
          style={tw`py-[1.5] px-2`}
          textStyle={tw`text-primary`}
          onPress={onBack}
        />
      )}
      {renderHeader()}
    </View>
  );
};

export default AppHeader;
