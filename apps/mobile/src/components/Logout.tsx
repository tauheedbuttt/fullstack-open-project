import { LogoutIcon } from "../../assets";
import useAuth from "../hooks/useAuth";
import tw from "../lib/tailwind";
import Button from "./Button";

const Logout = () => {
  const { onLogout } = useAuth();
  return (
    <Button
      onPress={onLogout}
      text="Log Out"
      style={tw`bg-danger/5 border-danger border-[0.2px] justify-start`}
      textStyle={tw`text-danger`}
      Icon={LogoutIcon}
    />
  );
};

export default Logout;
