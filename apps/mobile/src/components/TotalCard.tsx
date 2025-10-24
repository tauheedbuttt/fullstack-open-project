import { View, Text } from "react-native";
import React from "react";
import Card from "./Card";
import tw from "../lib/tailwind";
import IconCard from "./IconCard";
import { SvgProps } from "react-native-svg";

type Props = {
  Icon: React.FC<SvgProps | any>;
  title: string;
  value: string;
  subtitle: string;
};

const TotalCard = ({ Icon, title, value, subtitle }: Props) => {
  return (
    <Card style={tw` bg-green-600 `}>
      <View style={tw` flex-row justify-between items-center `}>
        <Text style={tw` text-white `}>{title}</Text>
        <IconCard
          Icon={Icon}
          bgStyle={tw` bg-white/20 `}
          style={tw` text-white `}
        />
      </View>
      <Text style={tw` text-white text-2xl font-bold mt-2 `}>{value}</Text>
      <Text style={tw` text-white/80 mt-1 text-sm`}>{subtitle}</Text>
    </Card>
  );
};

export default TotalCard;
