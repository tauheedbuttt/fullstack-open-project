import { Text, View } from "react-native";
import {
  EditIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../../../../assets";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import IconCard from "../../../components/IconCard";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-native";
import { routes } from "../../../config/routeConfig";
import { IUserRole } from "shared";

interface InfoProps {
  name: string;
  role: IUserRole;
  email: string;
  phone?: string;
  sector?: string;
}

const Info = ({ phone, email, name, role, sector }: InfoProps) => {
  const navigate = useNavigate();
  const contact = [
    { label: "Email", value: email, icon: MailIcon },
    { label: "Phone", value: phone, icon: PhoneIcon },
    { label: "Assigned Sector", value: sector, icon: LocationIcon },
  ].filter((item) => !!item.value);
  return (
    <Card style={tw`flex-col gap-6`}>
      {/* Name and Avatar */}
      <View style={tw`flex-row justify-between items-start gap-2`}>
        {/* Avatar */}
        <View style={tw`flex-row flex-1 items-center gap-4`}>
          <View
            style={tw`w-16 h-16 rounded-full bg-primary items-center justify-center`}
          >
            <Text style={tw`font-bold text-lg text-white`}>T</Text>
          </View>
          {/* Name, Role */}
          <View style={tw`flex-1`}>
            <Text style={tw`font-semibold text-base`}>{name}</Text>
            <Text style={tw`text-secondary text-sm`}>{role}</Text>
          </View>
        </View>
        {/* Edit Icon */}
        <Button
          Icon={EditIcon}
          variant="text"
          onPress={() => navigate(routes.shared.editProfile)}
        />
      </View>

      {/* Contact Details */}
      <View style={tw`flex-col gap-3`}>
        {contact.map(({ label, value, icon: Icon }) => (
          <View key={label} style={tw`flex-row items-center gap-3`}>
            <IconCard
              Icon={Icon}
              bgStyle={tw`bg-gray-100`}
              style={tw`text-secondary`}
            />
            <View>
              <Text style={tw`font-semibold text-base`}>{label}</Text>
              <Text style={tw`text-secondary text-sm`}>{value}</Text>
            </View>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default Info;
