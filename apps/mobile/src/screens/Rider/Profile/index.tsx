import { Text, View } from "react-native";
import Logout from "../../../components/Logout";
import Info from "../../Owner/Profile/Info";
import { IUserRole } from "shared";
import tw from "../../../lib/tailwind";
import { PaidIcon, TrendIcon } from "../../../../assets";
import Card from "../../../components/Card";
import IconCard, { IconCardTypes } from "../../../components/IconCard";

const RiderProfile = () => {
  const summary = [
    { title: "Collected", value: 1233, Icon: PaidIcon, variant: "success" },
    { title: "Pending", value: 1233, Icon: TrendIcon, variant: "danger" },
  ];
  return (
    <View style={tw`flex-col  flex-1 gap-4`}>
      <Info
        name="Tauheed Butt"
        role={IUserRole.RIDER}
        phone="+92 333 1234567"
        email="test@test.com"
        sector={"D-12/3"}
      />
      {/* Summary */}
      <View>
        <Text style={tw`text-base mb-3`}>Today's Summary</Text>
        <View style={tw`flex-row gap-3`}>
          {summary.map((item) => (
            <Card key={item.title} style={tw`flex-1 items-start gap-5`}>
              <IconCard
                Icon={item.Icon}
                variant={item.variant as IconCardTypes}
              />
              <Text style={tw`text-xl font-bold`}>{item.value}</Text>
              <Text style={tw`text-sm text-secondary`}>{item.title}</Text>
            </Card>
          ))}
        </View>
      </View>
      {/* Total Amount */}
      <Card style={tw`flex-row items-start gap-2 bg-primary/20`}>
        <View style={tw`flex-1 gap-1`}>
          <Text style={tw`text-xs text-secondary`}>Total Amount Collected</Text>
          <Text style={tw`text-xl font-medium`}>
            PKR {(80000).toLocaleString()}
          </Text>
        </View>
        <IconCard Icon={PaidIcon} bgStyle={tw`border-[0.3px] border-primary`} />
      </Card>
      <Logout />
    </View>
  );
};

export default RiderProfile;
