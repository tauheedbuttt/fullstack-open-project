import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import { DollarIcon, HistoryIcon, PhoneIcon } from "../../../../assets";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import { routes } from "../../../config/routeConfig";
import tw from "../../../lib/tailwind";
import { onCall } from "../../../config/utils";

const QuickActions = () => {
  const navigate = useNavigate();
  const actions = [
    {
      label: "View Stats",
      onPress: () => navigate(routes.owner.dashboard),
      icon: DollarIcon,
      style: tw`text-theme`,
      bgStyle: tw`bg-primary/10`,
    },
    {
      label: "Contact Rider",
      onPress: () => onCall("+1234567890"),
      icon: PhoneIcon,
      style: tw`text-blue`,
      bgStyle: tw`bg-blue/10`,
    },
    {
      label: "Payment History",
      onPress: () => navigate(routes.owner.payments),
      icon: HistoryIcon,
      style: tw`text-green-600`,
      bgStyle: tw`bg-green-100`,
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={tw`flex-1 flex-row justify-between gap-2 `}
    >
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          onPress={action.onPress}
          style={tw`flex-1`}
        >
          <Card style={tw`items-center justify-center p-2 py-3 gap-2`}>
            <IconCard {...action} Icon={action.icon} size={22} />
            <Text style={tw`text-xs text-center`}>{action.label}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default QuickActions;
