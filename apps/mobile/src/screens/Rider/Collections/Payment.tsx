import { View, Text } from "react-native";
import React from "react";
import Card from "../../../components/Card";
import IconCard, { IconCardTypes } from "../../../components/IconCard";
import tw from "../../../lib/tailwind";
import { SvgProps } from "react-native-svg";
import dayjs from "dayjs";

interface PaymentProps {
  Icon: React.FC<SvgProps>;
  title: string;
  subtitle: string;
  time?: Date;
  amount: number;
  iconCardVariant?: IconCardTypes;
}

const Payment = ({
  Icon,
  title,
  subtitle,
  time,
  amount,
  iconCardVariant,
}: PaymentProps) => {
  return (
    <Card style={tw`flex-row items-start gap-2`}>
      <IconCard Icon={Icon} variant={iconCardVariant} />
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-medium`}>{title}</Text>
        <Text style={tw`text-sm text-secondary`}>{subtitle}</Text>
        {time && (
          <Text style={tw`text-xs text-secondary mt-1`}>
            {dayjs(time).format("HH:MM A")}
          </Text>
        )}
      </View>
      <Text style={tw`text-base font-medium`}>
        PKR {amount.toLocaleString()}
      </Text>
    </Card>
  );
};

export default Payment;
