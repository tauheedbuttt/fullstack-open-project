import { Linking, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import { DollarIcon, HistoryIcon, PhoneIcon } from "../../../../assets";
import Card from "../../../components/Card";
import { routes } from "../../../config/routeConfig";
import tw from "../../../lib/tailwind";
import IconCard from "../../../components/IconCard";

const QuickActions = () => {
  const navigate = useNavigate();
  const onCall = async () => {
    const phone = "+1234567890"; // replace with the rider's number
    const url = `tel:${phone}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.warn("Dialer not supported on this device:", url);
      }
    } catch (err) {
      console.warn("Failed to open dialer:", err);
    }
  };
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
      onPress: onCall,
      icon: PhoneIcon,
      style: tw`text-blue`,
      bgStyle: tw`bg-blue/10`,
    },
    {
      label: "Payment History",
      onPress: () => navigate(routes.owner.dashboard),
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
