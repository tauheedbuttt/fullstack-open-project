import { ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import TabBar from "./TabBar";
import AppHeader, { AppHeaderProps } from "./Header";

interface Props extends AppHeaderProps {
  children?: React.ReactNode;
  showAppBar?: boolean;
  showTabBar?: boolean;
}

const Layout = ({
  children,
  showAppBar = true,
  showTabBar = false,
  ...headerProps
}: Props) => {
  return (
    <View style={tw`flex-1 bg-primary/10`}>
      {showAppBar && (
        <View
          style={tw.style(
            `h-16 w-full items-center justify-center `,
            showAppBar && "bg-white",
            headerProps.variant === "rider-home" && "bg-primary"
          )}
        >
          {/* App Bar */}
        </View>
      )}
      {showTabBar && <AppHeader variant="normal" {...headerProps} />}
      <ScrollView contentContainerStyle={tw`flex-grow-1 flex-col px-4 py-3`}>
        {children}
      </ScrollView>
      {showTabBar && <TabBar />}
    </View>
  );
};

export default Layout;
