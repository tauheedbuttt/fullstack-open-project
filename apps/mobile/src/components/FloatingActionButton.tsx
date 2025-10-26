import { View } from "react-native";
import Button, { ButtonProps } from "./Button";
import tw from "../lib/tailwind";

const FloatingActionButton = (props: ButtonProps) => {
  return (
    <View style={tw`absolute right-3 bottom-26`}>
      <Button
        {...props}
        style={tw`p-2 px-3 rounded-full`}
        textStyle={tw`text-sm`}
      />
    </View>
  );
};

export default FloatingActionButton;
