import { Text, View } from "react-native";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import ProgressBar from "../../../components/ProgressBar";

const Progress = () => {
  const total = 40;
  const completed = 12;
  const percentage = Math.round((completed / total) * 100);
  return (
    <Card style={tw`gap-2`}>
      {/* Title */}
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-base font-medium`}>Collection Progress</Text>
        <Text style={tw`text-sm text-secondary`}>
          {completed}/{total}
        </Text>
      </View>
      {/* Bar */}
      <ProgressBar percentage={percentage} />
      {/* Indicator */}
      <Text style={tw`text-sm text-secondary`}>
        {percentage}% completed for today
      </Text>
    </Card>
  );
};

export default Progress;
