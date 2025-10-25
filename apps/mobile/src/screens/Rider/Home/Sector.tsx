import { Text, View } from "react-native";
import { IPaymentStatus } from "shared";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";
import IconCard from "../../../components/IconCard";
import { HouseIcon } from "../../../../assets";
import Chip from "../../../components/Chip";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-native";
import { routes } from "../../../config/routeConfig";
import { paymentStatusChip } from "../../../config/constants";

const Sector = () => {
  const navigate = useNavigate();
  const houses = [
    { address: "House 123, St 23, D-12/3", status: IPaymentStatus.PENDING },
    { address: "House 332, St 23, D-12/3", status: IPaymentStatus.PENDING },
    { address: "House 521, St 23, D-12/3", status: IPaymentStatus.COMPLETED },
    { address: "House 521, St 23, D-12/3", status: IPaymentStatus.COMPLETED },
  ];
  return (
    <Card style={tw`gap-3`}>
      {/* Title */}
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-base font-medium`}>Collection Sector</Text>
        <Chip
          text="D-12/3"
          containerStyle={tw`bg-blue/10 rounded-lg`}
          textStyle={tw`text-blue font-medium`}
        />
      </View>
      {/* Data */}
      <View style={tw`gap-2`}>
        {houses.slice(0, 3).map((item) => {
          const first = item.address.split(",")[0];
          const remaining = item.address.replace(`${first},`, "").trim();
          const colors = paymentStatusChip[item.status];
          return (
            <Card style={tw`bg-gray-50 flex-row justify-between`}>
              <View style={tw`flex-row items-center gap-2`}>
                <IconCard Icon={HouseIcon} />
                <View>
                  <Text style={tw`text-sm font-medium`}>{first}</Text>
                  <Text style={tw`text-secondary text-xs`}>{remaining}</Text>
                </View>
              </View>
              <Chip
                text={item.status}
                textStyle={tw`${colors.text}`}
                containerStyle={tw`${colors.background}`}
              />
            </Card>
          );
        })}

        {houses.length > 3 && (
          <Button
            text="View All "
            variant="secondary"
            textStyle={tw`text-sm text-primary`}
            onPress={() => navigate(routes.rider.houses)}
          />
        )}
      </View>
    </Card>
  );
};

export default Sector;
