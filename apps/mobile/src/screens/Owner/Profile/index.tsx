import { View } from "react-native";
import Logout from "../../../components/Logout";
import tw from "../../../lib/tailwind";
import Info from "./Info";
import LinkedHouses from "./LinkedHouses";

const OwnerProfile = () => {
  return (
    <View style={tw`flex-col  flex-1 gap-4`}>
      <Info />
      <LinkedHouses />
      <Logout />
    </View>
  );
};

export default OwnerProfile;
