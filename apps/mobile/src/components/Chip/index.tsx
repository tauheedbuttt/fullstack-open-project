import { Text } from "react-native";
import Card from "../Card";
import { Style } from "twrnc";
import tw from "../../lib/tailwind";
import { SvgProps } from "react-native-svg";

type Props = {
  text: string;
  textStyle?: Style;
  containerStyle?: Style;
  Icon?: React.FC<SvgProps>;
};

const Chip = ({
  text,
  textStyle = tw`text-primary`,
  containerStyle = tw`bg-white/10`,
  Icon,
}: Props) => {
  return (
    <Card
      style={tw.style(
        `flex-row  items-center p-0 px-3 py-1 rounded-full`,
        containerStyle
      )}
    >
      {Icon && <Icon style={tw`mr-2`} width={14} height={14} />}
      <Text style={tw.style(`text-xs`, textStyle)}>{text}</Text>
    </Card>
  );
};

export default Chip;
