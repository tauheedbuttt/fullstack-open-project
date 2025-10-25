import { Text, View } from "react-native";
import TotalCard from "../../../components/TotalCard";
import tw from "../../../lib/tailwind";
import { useState } from "react";
import Tabs from "../../../components/Tabs";
import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import Today from "./Today";
import ThisWeek from "./ThisWeek";
import All from "./All";

type TabOptions = "today" | "this week" | "all";

const Collections = () => {
  const [tab, setTab] = useState<TabOptions>("today");

  const tabs = ["today", "this week", "all"].map((item) => item.toUpperCase());

  const tabComponents = {
    today: <Today />,
    "this week": <ThisWeek />,
    all: <All />,
  };

  return (
    <View style={tw`gap-3`}>
      <TotalCard
        title={`Total calculated ${tab === "all" ? "all time" : tab}`}
        value={`PKR ${Number(15000).toLocaleString()}`}
        subtitle="3 out of 24 houses"
        style={tw`bg-primary`}
      />
      <Tabs
        tabs={tabs}
        activeTab={tab.toUpperCase()}
        onTabChange={(value) => setTab(value.toLocaleLowerCase() as TabOptions)}
      />
      {tabComponents[tab]}
    </View>
  );
};

export default Collections;
