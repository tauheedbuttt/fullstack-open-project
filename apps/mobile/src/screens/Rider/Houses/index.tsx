import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IPaymentStatus } from "shared";
import { ClockIcon, LocationIcon, PaidIcon } from "../../../../assets";
import Card from "../../../components/Card";
import Chip from "../../../components/Chip";
import IconCard from "../../../components/IconCard";
import Modal from "../../../components/Modal";
import { paymentStatusChip } from "../../../config/constants";
import { SearchState } from "../../../features/searchSlice";
import tw from "../../../lib/tailwind";
import { RootState } from "../../../store";
import useModal from "../../../hooks/useModal";
import { modal } from "../../../config/modal";
import ViewHouseModal from "./ViewHouseModal";

const Houses = () => {
  const { search } = useSelector<RootState>(
    (state) => state.search
  ) as SearchState;
  const { openModal } = useModal(modal.viewHouse);

  const houses = [
    {
      owner: { name: "John Doe" },
      address: "House 123, St 123, 342",
      status: IPaymentStatus.COMPLETED,
    },
    {
      owner: { name: "John Doe" },
      address: "House 12, St 123, 342",
      status: IPaymentStatus.PENDING,
    },
    {
      owner: { name: "John Doe" },
      address: "House 23, St 123, 342",
      status: IPaymentStatus.COMPLETED,
    },
    {
      owner: { name: "John Dsoe" },
      address: "House 123, St 13, 342",
      status: IPaymentStatus.COMPLETED,
    },
    {
      owner: { name: "John Doe" },
      address: "House 123, St 123, 34",
      status: IPaymentStatus.PENDING,
    },
  ].filter((item) =>
    item.owner.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const icons = {
    [IPaymentStatus.COMPLETED]: (
      <IconCard
        Icon={PaidIcon}
        bgStyle={tw`bg-green-200`}
        style={tw`text-green-600`}
      />
    ),
    [IPaymentStatus.PENDING]: (
      <IconCard
        Icon={ClockIcon}
        bgStyle={tw`bg-danger/10`}
        style={tw`text-danger`}
      />
    ),
  };

  return (
    <View style={tw`gap-2`}>
      {houses.map((item) => {
        const chip = paymentStatusChip[item.status];
        const first = item.address.split(",")[0];
        const remaining = item.address.replace(`${first},`, "").trim();
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openModal(item)}
            key={item.address}
          >
            <Card>
              {/* Details */}
              <View style={tw`flex-row gap-2 items-center`}>
                {icons[item.status]}
                {/* Owner */}
                <View style={tw`flex-1`}>
                  <Text style={tw`text-base font-medium`}>
                    {item.owner.name}
                  </Text>
                  <Text style={tw`text-xs text-secondary`}>{remaining}</Text>
                </View>
                {/* Status */}
                <Chip
                  text={item.status}
                  containerStyle={tw`${chip.background} rounded-lg p-2`}
                  textStyle={tw`${chip.text}`}
                />
              </View>
              {/* Address */}
              <View style={tw`flex-row items-center gap-2 mt-7`}>
                <LocationIcon
                  style={tw`text-secondary`}
                  height={15}
                  width={15}
                />
                <Text style={tw`text-secondary text-sm`}>{first}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        );
      })}
      <ViewHouseModal />
    </View>
  );
};

export default Houses;
