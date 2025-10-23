import { View } from "react-native";
import tw from "../lib/tailwind";
import Button from "./Button";

type Props = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Tabs = ({ tabs, activeTab, onTabChange }: Props) => {
  return (
    <View style={tw` flex-row justify-around bg-gray-200 p-1 rounded-lg`}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={tab === activeTab ? "white" : "text"}
          onPress={() => onTabChange(tab)}
          text={tab}
          style={tw`flex-1 px-1 py-2`}
          textStyle={tw`text-sm text-secondary`}
        />
      ))}
    </View>
  );
};

export default Tabs;
