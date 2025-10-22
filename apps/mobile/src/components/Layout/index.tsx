import { View } from "react-native";
import tw from "../../lib/tailwind";

type Props = {
  children?: React.ReactNode;
  showAppBar?: boolean;
};

const Layout = ({ children, showAppBar = true }: Props) => {
  return (
    <View style={tw`flex-1 bg-primary/10 px-4`}>
      {showAppBar && (
        <View style={tw`h-16 w-full items-center justify-center `}>
          {/* App Bar */}
        </View>
      )}
      {children}
    </View>
  );
};

export default Layout;
