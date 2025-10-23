import { Text, TouchableOpacity, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { AppVariants } from ".";
import tw from "../../../lib/tailwind";

type HeaderVariants = Extract<
  AppVariants,
  "owner-home" | "rider-home" | "rider-houses"
>;

type Props = {
  variant: HeaderVariants;
  route: string;
};

const BaseHomeHeader = ({ variant, route }: Props) => {
  const navigate = useNavigate();
  const textColor = variant === "rider-home" && "text-white";
  const handleNavigate = () => {
    navigate(route);
  };
  return (
    <View style={tw`w-full flex-col gap-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`gap-1`}>
          <Text style={tw.style(`text-secondary text-sm`, textColor)}>
            Hello,
          </Text>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Text style={tw.style(`font-medium text-xl`, textColor)}>
            Tauheed 👋
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleNavigate}
          style={tw.style(
            `w-10 h-10 rounded-full bg-primary items-center justify-center`,
            variant === "rider-home" && "bg-white"
          )}
        >
          <Text
            style={tw.style(
              `text-white font-medium`,
              variant === "rider-home" && "text-theme"
            )}
          >
            T
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BaseHomeHeader;
