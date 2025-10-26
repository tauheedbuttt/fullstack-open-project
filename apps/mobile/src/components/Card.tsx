import { View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import tw from "../lib/tailwind";

const Card = ({ style, ...props }: ViewProps) => {
  return (
    <View style={[tw`p-4 bg-white rounded-lg shadow-sm`, style]} {...props} />
  );
};

export default Card;
