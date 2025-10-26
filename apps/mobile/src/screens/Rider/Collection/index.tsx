import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IPaymentStatus } from "shared";
import Chip from "../../../components/Chip";
import { CollectionState } from "../../../features/collectionSlice";
import tw from "../../../lib/tailwind";
import { RootState } from "../../../store";
import CollectionCard from "./CollectionCard";
import CollectionModal from "./CollectionModal";
import SkipModal from "./SkipModal";

const Collection = () => {
  const { total, collected } = useSelector<RootState>(
    (state) => state.collection
  ) as CollectionState;
  const pending = total - collected;

  const houses = [
    {
      id: 1,
      owner: { name: "Alex Hult", phone: `+9233312346598` },
      address: "House #42, Street 5",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.COMPLETED, amount: 3000 },
    },
    {
      id: 2,
      owner: { name: "Sana Iqbal", phone: `+923334567890` },
      address: "House #12, Street 3",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.PENDING, amount: 2000 },
    },
    {
      id: 3,
      owner: { name: "Ali Khan", phone: `+923336789012` },
      address: "House #7, Street 2",
      lastPayment: { date: new Date() },
      payment: { status: IPaymentStatus.PENDING, amount: 1500 },
    },
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
        {houses.map((item, index) => (
          <CollectionCard {...item} position={index + 1} />
        ))}
      </View>
      <CollectionModal />
      <SkipModal />
    </View>
  );
};

export default Collection;
