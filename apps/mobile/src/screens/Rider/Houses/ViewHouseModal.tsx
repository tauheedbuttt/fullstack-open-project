import { Text, View } from "react-native";
import Modal from "../../../components/Modal";
import { modal } from "../../../config/modal";
import Card from "../../../components/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ModalState } from "../../../features/modalSlice";
import tw from "../../../lib/tailwind";
import IconCard from "../../../components/IconCard";
import {
  HouseIcon,
  LocationIcon,
  PaidIcon,
  PhoneIcon,
} from "../../../../assets";
import Button from "../../../components/Button";

const ViewHouseModal = () => {
  const { data } = useSelector<RootState>(
    (state) => state.modal
  ) as ModalState<any>;

  const info = [
    { label: "Address", value: data?.address, icon: LocationIcon },
    { label: "Phone Number", value: data?.phone, icon: PhoneIcon },
  ].filter((item) => !!item.value);

  return (
    <Modal title={"House Details"} modalKey={modal.viewHouse}>
      <View style={tw`gap-5`}>
        {/* House Owner */}
        <Card style={tw`bg-gray-50 `}>
          <View style={tw`flex-row gap-2 items-center`}>
            <IconCard Icon={HouseIcon} />
            <View>
              <Text style={tw`font-medium text-base`}>{data?.owner?.name}</Text>
              <Text style={tw`text-secondary text-xs`}>{data?.address}</Text>
            </View>
          </View>
        </Card>
        {/* Info */}
        <View style={tw`gap-2`}>
          {info.map((item) => (
            <View style={tw`flex-row gap-2 items-center`}>
              <item.icon style={tw`text-secondary`} height={15} width={15} />
              <View>
                <Text style={tw`text-secondary text-xs`}>{item.label}</Text>
                <Text style={tw`font-medium text-base`}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* Fees */}
        <Card style={tw`bg-primary/10`}>
          <Text>Monthly Fee</Text>
          <Text style={tw`text-lg font-semibold `}>
            PKR {Number(5000).toLocaleString()}
          </Text>
        </Card>
        {/* Image Upload */}
        <Button
          Icon={PaidIcon}
          iconSize={15}
          text="Mark as Collected"
          textStyle={tw`ml-3 text-sm`}
        />
      </View>
    </Modal>
  );
};

export default ViewHouseModal;
