import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { IPaymentDuration, colors } from "shared";
import {
  HouseIcon,
  LocationIcon,
  PhoneIcon,
  UserIcon,
} from "../../../../assets";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import Tabs from "../../../components/Tabs";
import TotalCard from "../../../components/TotalCard";
import { getPaymentDurationOptions, onCall } from "../../../config/utils";
import tw from "../../../lib/tailwind";
import Chip from "../../../components/Chip";

const Payment = () => {
  const [duration, setDuration] = useState<IPaymentDuration>(
    IPaymentDuration.QUARTER
  );
  const [durations, setDurations] = useState<string[]>([]);

  const info = [
    {
      Icon: HouseIcon,
      type: "property",
      title: "Primary House",
      data: [
        { value: "123 Main St, Anytown, USA", Icon: LocationIcon },
        {
          value: "D-12/3",
          Icon: () => <View style={tw`w-2 h-2 bg-secondary rounded-full`} />,
        },
      ],
    },
    {
      Icon: UserIcon,
      type: "rider",
      title: "Ahmed Ali",
      data: [{ value: "+92 300 1234567", Icon: PhoneIcon }],
    },
  ];

  const currentDate = new Date();
  const durationOptions = getPaymentDurationOptions(currentDate, duration);

  return (
    <View style={tw` flex-1 gap-4`}>
      {/* Screen */}
      <ScrollView contentContainerStyle={tw`flex-col gap-4 pb-26 flex-grow-1`}>
        {/* Info cards */}
        <View style={tw`flex-col gap-2`}>
          {info.map((item) => (
            <Card key={item.title}>
              {/* Title and Action */}
              <View style={tw`flex-row justify-between items-center`}>
                {/* Title */}
                <View style={tw`flex-row items-center gap-2`}>
                  <IconCard Icon={item.Icon} size={25} />
                  <View>
                    <Text style={tw`text-secondary text-xs uppercase`}>
                      {item.type}
                    </Text>
                    <Text style={tw`text-base font-medium`}>{item.title}</Text>
                  </View>
                </View>
                {/* Action */}
                {item.type === "rider" && (
                  <Button
                    Icon={PhoneIcon}
                    variant="secondary"
                    textStyle={tw`text-primary`}
                    style={tw`p-2 bg-gray-200`}
                    onPress={() => onCall(item.data[0].value)}
                  />
                )}
              </View>
              {/* Data */}
              <View style={tw`flex-col gap-2 px-2 pt-3`}>
                {item.data.map((data) => (
                  <View
                    style={tw`flex-row items-center gap-2 `}
                    key={data.value}
                  >
                    <View style={tw`w-5 h-5 items-center justify-center `}>
                      <data.Icon
                        style={tw`text-secondary`}
                        height={15}
                        width={15}
                      />
                    </View>
                    <Text style={tw`text-secondary text-sm`}>{data.value}</Text>
                  </View>
                ))}
              </View>
            </Card>
          ))}
        </View>
        {/* Payment Duration */}
        <Tabs
          tabs={Object.values(IPaymentDuration)}
          activeTab={duration}
          onTabChange={(tab) => {
            setDuration(tab as IPaymentDuration);
            setDurations([]);
          }}
        />
        {/* Durations */}
        <Card>
          <Text style={tw`text-base font-medium mb-2`}>Select {duration}</Text>
          <View style={tw`gap-2`}>
            {durationOptions.map((item, index) => (
              <BouncyCheckbox
                key={item.label}
                size={20}
                fillColor={colors.primary}
                iconStyle={tw`rounded-md`}
                innerIconStyle={tw`rounded-md`}
                style={tw`flex-row justify-between items-center border-gray-300 border gap-3 rounded-md p-4`}
                textComponent={
                  <View style={tw`flex-row gap-3 items-center flex-1`}>
                    {/* Duration Details */}
                    <View style={tw`gap-1 flex-9 items-start`}>
                      <Text style={tw`text-base font-medium `}>
                        {item.label}
                      </Text>
                      {index === 0 && (
                        <Chip
                          containerStyle={tw`bg-primary/10`}
                          textStyle={tw`text-theme`}
                          text="Next Due"
                        />
                      )}
                    </View>
                    {/* Amount */}
                    <Text style={tw`text-sm font-medium `}>
                      PKR {Number(5000).toLocaleString()}
                    </Text>
                  </View>
                }
                onPress={() => {
                  const existing = durations.includes(item.label);
                  let updatedState = [...durations];
                  if (existing)
                    updatedState = updatedState.filter((i) => i !== item.label);
                  else updatedState = [...updatedState, item.label];
                  setDurations(updatedState);
                }}
              />
            ))}
          </View>
        </Card>
        {durations.length > 0 && (
          <TotalCard
            Icon={() => (
              <Text style={tw`text-white`}>
                {durations.length} {duration}
              </Text>
            )}
            title="Total Amount"
            value="$12,000"
            subtitle={durations.join(", ")}
          />
        )}
      </ScrollView>
      {/* Action */}
      <View
        style={tw`p-5 bg-white absolute pb-7 bottom-[-3] left-[-4] right-[-4]`}
      >
        <Button disabled={durations.length === 0} text="Pay Now" />
      </View>
    </View>
  );
};

export default Payment;
