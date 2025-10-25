import { View } from "react-native";
import tw from "../lib/tailwind";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <View style={tw`w-full h-2 my-4`}>
      {/* back-bar */}
      <View style={tw`bg-gray-100 flex-1 rounded-full`} />
      {/* progress-bar */}
      <View
        style={tw.style(
          `absolute bg-primary h-full rounded-full`,
          percentage ? `w-[${percentage}%]` : ""
        )}
      />
    </View>
  );
};

export default ProgressBar;
