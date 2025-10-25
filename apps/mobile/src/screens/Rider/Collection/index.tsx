import { Text, View } from "react-native";
import Chip from "../../../components/Chip";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CollectionState } from "../../../features/collectionSlice";
import tw from "../../../lib/tailwind";
import { IPaymentStatus } from "shared";
import Card from "../../../components/Card";
import Button, { ButtonProps } from "../../../components/Button";
import {
  CrossOutlinedIcon,
  DirectionIcon,
  DollarIcon,
  LocationIcon,
  PaidIcon,
  PhoneIcon,
} from "../../../../assets";
import IconCard from "../../../components/IconCard";
import { paymentStatusChip } from "../../../config/constants";

interface ActionButtonProps extends ButtonProps {
  key: string;
}

const Collection = () => {
  const { total, collected } = useSelector<RootState>(
    (state) => state.collection
  ) as CollectionState;
  const pending = total - collected;

  const houses = [
    {
      id: 1,
      owner: { name: "Alex Hult", phone: +9233312346598 },
      address: "House #42, Street 5",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.COMPLETED, amount: 3000 },
    },
    {
      id: 2,
      owner: { name: "Sana Iqbal", phone: +923334567890 },
      address: "House #12, Street 3",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.PENDING, amount: 2000 },
    },
    {
      id: 3,
      owner: { name: "Ali Khan", phone: +923336789012 },
      address: "House #7, Street 2",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.PENDING, amount: 1500 },
    },
  ];

  const actions: ActionButtonProps[] = [
    { key: "collection", Icon: PaidIcon, text: "Collect" },
    { key: "skip", Icon: CrossOutlinedIcon, text: "Skip", variant: "outlined" },
    { key: "phone", Icon: PhoneIcon, variant: "outlined" },
    { key: "direction", Icon: DirectionIcon, variant: "outlined" },
  ];

  return (
    <View style={tw`gap-4`}>
      {/* Title */}
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-base`}>Collection Queue</Text>
        <Chip
          containerStyle={tw`border-[0.3px] border-secondary`}
          text={`${pending} pending`}
        />
      </View>
      {/* Payments */}
      <View style={tw`gap-2`}>
        {houses.map((item, index) => {
          const chip = paymentStatusChip[item.payment.status];
          const details = [
            { Icon: PhoneIcon, value: `Last: Sep 5, 2025` },
            { Icon: DollarIcon, value: `PKR ${(5000).toLocaleString()}` },
          ];
          const isPaid = item.payment.status === IPaymentStatus.COMPLETED;
          return (
            <Card
              key={item.id}
              style={tw.style(`gap-5`, isPaid && "bg-green-50")}
            >
              {/* Info */}
              <View style={tw`gap-3`}>
                <View style={tw`flex-row items-start gap-2`}>
                  {/* Icon */}
                  <IconCard
                    Icon={isPaid ? PaidIcon : () => <Text>{index + 1}</Text>}
                    variant={isPaid ? "success" : "primary"}
                  />
                  {/* Details */}
                  <View style={tw`flex-1 gap-1 justify-between`}>
                    <Text style={tw`text-base font-medium`}>
                      {item.owner.name}
                    </Text>
                    <View style={tw`flex-row gap-2 items-center`}>
                      <LocationIcon
                        style={tw`text-secondary`}
                        height={15}
                        width={15}
                      />
                      <Text style={tw`text-secondary text-sm`}>
                        {item.address}
                      </Text>
                    </View>
                  </View>
                  <Chip
                    text={item.payment.status}
                    containerStyle={tw`${chip.background}`}
                    textStyle={tw`${chip.text}`}
                  />
                </View>
                {/* details */}
                <View style={tw`gap-1`}>
                  {details.map((detail) => (
                    <View
                      key={detail.value}
                      style={tw`flex-row gap-2 items-center`}
                    >
                      <detail.Icon
                        style={tw`text-secondary`}
                        height={15}
                        width={15}
                      />
                      <Text style={tw`text-secondary text-sm`}>
                        {detail.value}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              {/* Actions */}
              <View
                style={tw`flex-row pt-4 gap-1 border-t-[0.3px] border-secondary`}
              >
                {isPaid && (
                  <View style={tw`flex-row gap-2 items-center`}>
                    <PaidIcon
                      style={tw`text-green-600`}
                      height={15}
                      width={15}
                    />
                    <Text style={tw`text-green-600 text-sm`}>
                      Collected today at 05:15 PM
                    </Text>
                  </View>
                )}
                {!isPaid &&
                  actions.map((item) => (
                    <Button
                      {...item}
                      key={item.key}
                      iconSize={18}
                      textStyle={tw`text-base`}
                      style={tw.style(`p-1 px-4`, item.text && "flex-1")}
                    />
                  ))}
              </View>
            </Card>
          );
        })}
      </View>
    </View>
  );
};

export default Collection;
