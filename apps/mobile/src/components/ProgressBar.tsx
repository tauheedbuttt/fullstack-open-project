import { View } from "react-native";
import tw from "../lib/tailwind";
import { Style } from "twrnc";

interface ProgressBarProps {
  percentage: number | string;
  style?: Style;
  variant?: "accent" | "primary";
}

const ProgressBar = ({
  percentage,
  style,
  variant = "primary",
}: ProgressBarProps) => {
  const variants = {
    accent: { backBar: tw`bg-white/30`, progressBar: tw`bg-white` },
    primary: { backBar: tw`bg-gray-100`, progressBar: tw`bg-primary` },
  };
  const { backBar, progressBar } = variants[variant];
  return (
    <View style={tw.style(`w-full h-2 my-4`, style)}>
      {/* back-bar */}
      <View style={tw.style(` flex-1 rounded-full`, backBar)} />
      {/* progress-bar */}
      <View
        style={tw.style(
          `absolute h-full rounded-full`,
          progressBar,
          percentage ? `w-[${percentage}%]` : ""
        )}
      />
    </View>
  );
};

export default ProgressBar;
