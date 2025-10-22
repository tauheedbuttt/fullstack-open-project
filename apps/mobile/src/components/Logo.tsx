import { Text, View } from "react-native";
import tw from "../lib/tailwind";

interface LogoProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizes = {
    xs: { width: 8, height: 8, textSize: "sm" },
    sm: { width: 12, height: 12, textSize: "md" },
    md: { width: 16, height: 16, textSize: "lg" },
    lg: { width: 20, height: 20, textSize: "xl" },
    xl: { width: 24, height: 24, textSize: "2xl" },
  }[size];
  return (
    <View
      style={tw`w-${sizes.width} h-${sizes.height} bg-primary flex items-center justify-center rounded-xl p-5 mb-4`}
    >
      <Text style={tw`text-white text-center font-bold text-${sizes.textSize}`}>
        D12
      </Text>
    </View>
  );
};

export default Logo;
