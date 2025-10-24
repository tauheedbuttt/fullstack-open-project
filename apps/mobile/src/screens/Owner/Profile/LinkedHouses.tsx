import { Text, View } from "react-native";
import { HouseIcon, LocationIcon, PhoneIcon } from "../../../../assets";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import tw from "../../../lib/tailwind";
import Button from "../../../components/Button";
import { onCall } from "../../../config/utils";

const LinkedHouses = () => {
  return (
    <Card>
      {/* <Address></Address> */}
      <View
        style={tw`flex-row items-center gap-4 pb-7 mb-5 border-b border-gray-200`}
      >
        <IconCard Icon={HouseIcon} />
        <View style={tw`flex-col gap-[0.2px]`}>
          <Text style={tw`font-semibold text-base`}>Primary House</Text>
          <View style={tw`flex-row items-center gap-1 mt-1`}>
            <LocationIcon height={15} width={15} style={tw`text-secondary`} />
            <Text style={tw`text-xs text-secondary`}>
              123 Main St, Springfield, IL
            </Text>
          </View>
        </View>
      </View>
      {/* Rider */}
      <View style={tw`flex-row justify-between items-end`}>
        <View style={tw`flex-col gap-2 flex-1`}>
          <Text style={tw`text-xs text-secondary`}>Assigned Rider</Text>
          <View>
            <Text style={tw`text-base font-medium`}>Ahmed Ali</Text>
            <Text style={tw`text-xs text-secondary`}>+92 300 1234567</Text>
          </View>
        </View>
        <Button
          onPress={() => onCall("+923001234567")}
          Icon={PhoneIcon}
          style={tw`p-2`}
          variant="outlined"
        />
      </View>
    </Card>
  );
};

export default LinkedHouses;
