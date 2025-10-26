import { Text, View } from "react-native";
import { IPaymentStatus } from "shared";
import {
  CrossOutlinedIcon,
  DirectionIcon,
  DollarIcon,
  LocationIcon,
  PaidIcon,
  PhoneIcon,
} from "../../../../assets";
import Button, { ButtonProps } from "../../../components/Button";
import Card from "../../../components/Card";
import Chip from "../../../components/Chip";
import IconCard from "../../../components/IconCard";
import { paymentStatusChip } from "../../../config/constants";
import tw from "../../../lib/tailwind";
import { onCall, openMapForAddress } from "../../../config/utils";
import useModal from "../../../hooks/useModal";
import { modal } from "../../../config/modal";

interface CollectionCardProps {
  owner: { name: string; phone: string };
  address: string;
  lastPayment?: { date: Date };
  payment: { status: IPaymentStatus; amount: number };
  position: number;
}

interface ActionButtonProps extends Omit<ButtonProps, "onPress"> {
  key: string;
  onPress?: (value: any) => void;
}

const CollectionCard = ({ position, ...item }: CollectionCardProps) => {
  const { openModal: openCollectionModal } = useModal(modal.collection);
  const { openModal: openSkipModal } = useModal(modal.skipCollection);
  const chip = paymentStatusChip[item.payment.status];
  const details = [
    { Icon: PhoneIcon, value: `Last: Sep 5, 2025` },
    { Icon: DollarIcon, value: `PKR ${(5000).toLocaleString()}` },
  ];
  const isPaid = item.payment.status === IPaymentStatus.COMPLETED;

  const actions: ActionButtonProps[] = [
    {
      key: "collection",
      Icon: PaidIcon,
      text: "Collect",
      onPress: () => openCollectionModal(item),
    },
    {
      key: "skip",
      Icon: CrossOutlinedIcon,
      text: "Skip",
      variant: "outlined",
      onPress: () => openSkipModal(item),
    },
    {
      key: "phone",
      Icon: PhoneIcon,
      variant: "outlined",
      onPress: (item) => onCall(item.owner.phone),
    },
    {
      key: "direction",
      Icon: DirectionIcon,
      variant: "outlined",
      onPress: (item) => openMapForAddress(item.address),
    },
  ];

  return (
    <Card style={tw.style(`gap-5`, isPaid && "bg-green-50")}>
      {/* Info */}
      <View style={tw`gap-3`}>
        <View style={tw`flex-row items-start gap-2`}>
          {/* Icon */}
          <IconCard
            Icon={isPaid ? PaidIcon : () => <Text>{position}</Text>}
            variant={isPaid ? "success" : "primary"}
          />
          {/* Details */}
          <View style={tw`flex-1 gap-1 justify-between`}>
            <Text style={tw`text-base font-medium`}>{item.owner.name}</Text>
            <View style={tw`flex-row gap-2 items-center`}>
              <LocationIcon style={tw`text-secondary`} height={15} width={15} />
              <Text style={tw`text-secondary text-sm`}>{item.address}</Text>
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
            <View key={detail.value} style={tw`flex-row gap-2 items-center`}>
              <detail.Icon style={tw`text-secondary`} height={15} width={15} />
              <Text style={tw`text-secondary text-sm`}>{detail.value}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Actions */}
      <View style={tw`flex-row pt-4 gap-1 border-t-[0.3px] border-secondary`}>
        {isPaid && (
          <View style={tw`flex-row gap-2 items-center`}>
            <PaidIcon style={tw`text-green-600`} height={15} width={15} />
            <Text style={tw`text-green-600 text-sm`}>
              Collected today at 05:15 PM
            </Text>
          </View>
        )}
        {!isPaid &&
          actions.map((button) => (
            <Button
              {...button}
              key={button.key}
              iconSize={18}
              textStyle={tw`text-base`}
              style={tw.style(`p-1 px-4`, button.text && "flex-1")}
              onPress={() => button.onPress && button.onPress(item)}
            />
          ))}
      </View>
    </Card>
  );
};

export default CollectionCard;
