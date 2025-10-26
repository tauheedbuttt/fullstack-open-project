import { View, Text } from "react-native";
import React from "react";
import Logo from "./Logo";
import tw from "../lib/tailwind";
import { LogoSize } from "../types";
import { Style } from "twrnc";

type Props = {
  size?: LogoSize;
  style?: Style;
  title?: string;
  description?: string;
};

const LogoData = ({ size = "lg", style, title, description }: Props) => {
  return (
    <View style={tw.style(`justify-center items-center flex-col gap-2`, style)}>
      {/* Logo */}
      <Logo size={size} />
      {/* Title */}
      <Text style={tw`text-xl font-bold text-primary`}>{title}</Text>
      {/* Description */}
      <Text style={tw`text-lg font-bold text-secondary`}>{description}</Text>
    </View>
  );
};

export default LogoData;
