import { ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import TabBar from "./TabBar";
import AppHeader, { AppHeaderProps } from "./Header";
import FloatingActionButton from "../FloatingActionButton";
import { useNavigate } from "react-router-native";
import { PlayIcon } from "../../../assets";

interface Props extends AppHeaderProps {
  children?: React.ReactNode;
  showAppBar?: boolean;
  showTabBar?: boolean;
}

const Layout = ({
  children,
  showAppBar = true,
  showTabBar = false,
  fab,
  ...headerProps
}: Props) => {
  const navigate = useNavigate();
  const Container = headerProps.noTabBar
    ? ({ contentContainerStyle, ...props }: any) => (
        <View style={contentContainerStyle} {...props} />
      )
    : ScrollView;

  const onFab = () => navigate(fab?.route ?? "");
  return (
    <>
      <View style={tw`flex-1 bg-primary/10`}>
        {showAppBar && (
          <View
            style={tw.style(
              `h-16 w-full items-center justify-center `,
              showAppBar && "bg-white",
              headerProps.variant &&
                ["rider-home", "collection-mode"].includes(
                  headerProps.variant
                ) &&
                "bg-primary"
            )}
          >
            {/* App Bar */}
          </View>
        )}
        {showTabBar && <AppHeader variant="normal" {...headerProps} />}
        <Container contentContainerStyle={tw`flex-grow-1 flex-col px-4 py-3`}>
          {children}
        </Container>

        {showTabBar && !headerProps.noTabBar && <TabBar />}
      </View>
      {fab && (
        <FloatingActionButton Icon={PlayIcon} text={fab.text} onPress={onFab} />
      )}
    </>
  );
};

export default Layout;
