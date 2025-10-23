import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { SearchState } from "../../../features/searchSlice";

const Houses = () => {
  const { search } = useSelector<RootState>(
    (state) => state.search
  ) as SearchState;

  return (
    <View>
      <Text>Houses: {search}</Text>
    </View>
  );
};

export default Houses;
