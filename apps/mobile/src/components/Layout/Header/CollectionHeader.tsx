import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CollectionState } from "../../../features/collectionSlice";
import Card from "../../Card";
import { useNavigate } from "react-router-native";
import Button from "../../Button";
import ProgressBar from "../../ProgressBar";
import { formatNumberAbbr } from "shared";

interface CollectionHeaderProps {
  title?: string;
  subtitle?: string;
}

const CollectionHeader = ({ title, subtitle }: CollectionHeaderProps) => {
  const navigate = useNavigate();
  const { amount, total, collected } = useSelector<RootState>(
    (state) => state.collection
  ) as CollectionState;
  const pending = total - collected;
  const percentage = ((collected / total) * 100).toFixed(0);

  const stats = [
    { label: "Pending", value: pending },
    { label: "Collected", value: collected },
    { label: "Amount", value: `PKR ${formatNumberAbbr(amount)}` },
  ];

  const onBack = () => navigate(-1);

  return (
    <View style={tw`w-full gap-3`}>
      {/* Title and Subtitle */}
      <View style={tw`w-full flex-row items-center gap-3 mb-3`}>
        <Button
          text="←"
          variant="accent"
          style={tw`py-[1.5] px-2`}
          onPress={onBack}
        />
        <View style={tw`w-full flex-col gap-2 `}>
          <Text style={tw`font-medium text-xl text-white`}>{title}</Text>
          {subtitle && <Text style={tw` text-sm text-white`}>{subtitle}</Text>}
        </View>
      </View>
      {/* Stats */}
      <View style={tw`flex-row gap-2`}>
        {stats.map((item) => (
          <Card style={tw`flex-1 p-2 bg-white/30 gap-2`}>
            <Text style={tw`text-white`}>{item.label}</Text>
            <Text style={tw`text-white font-bold text-lg`}>{item.value}</Text>
          </Card>
        ))}
      </View>
      {/* Progress */}
      <View style={tw`gap-2 mt-2`}>
        {/* Labels */}
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white`}>Today's Progress</Text>
          <Text style={tw`text-white`}>
            {collected}/{total}
          </Text>
        </View>
        <ProgressBar
          variant="accent"
          style={tw`my-0`}
          percentage={percentage}
        />
      </View>
    </View>
  );
};

export default CollectionHeader;
