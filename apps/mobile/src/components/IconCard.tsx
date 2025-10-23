import { SvgProps } from "react-native-svg";
import Card from "./Card";
import tw from "../lib/tailwind";
import { Style } from "twrnc";

interface IconCardProps {
  Icon: React.FC<SvgProps>;
  bgStyle: Style;
  style: Style;
  size?: number;
}

const IconCard = ({ Icon, bgStyle, style, size = 20 }: IconCardProps) => {
  return (
    <Card style={[tw`p-2 rounded-xl`, bgStyle]}>
      <Icon style={[style]} height={size} width={size} />
    </Card>
  );
};

export default IconCard;
