import { View } from "react-native";
import Logout from "../../../components/Logout";
import tw from "../../../lib/tailwind";
import Info from "./Info";
import LinkedHouses from "./LinkedHouses";
import { IUserRole } from "shared";

const OwnerProfile = () => {
  return (
    <View style={tw`flex-col  flex-1 gap-4`}>
      <Info
        name="Tauheed Butt"
        role={IUserRole.OWNER}
        phone="+92 333 1234567"
        email="test@test.com"
      />
      <LinkedHouses />
      <Logout />
    </View>
  );
};

export default OwnerProfile;
