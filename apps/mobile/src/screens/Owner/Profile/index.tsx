import { View } from "react-native";
import Logout from "../../../components/Logout";
import Info from "./Info";
import tw from "../../../lib/tailwind";
import LinkedHouses from "./LinkedHouses";

const OwnerProfile = () => {
  return (
    <View style={tw`flex-col gap-4`}>
      <Info />
      <LinkedHouses />
      <Logout />
    </View>
  );
};

export default OwnerProfile;
