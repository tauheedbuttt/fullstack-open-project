import { SvgProps } from "react-native-svg";
import Card from "./Card";
import tw from "../lib/tailwind";
import { Style } from "twrnc";

export type IconCardTypes = "primary" | "success";

interface IconCardProps {
  Icon: React.FC<SvgProps>;
  bgStyle?: Style;
  style?: Style;
  size?: number;
  variant?: IconCardTypes;
}

const IconCard = ({
  Icon,
  bgStyle,
  style,
  size = 20,
  variant = "primary",
}: IconCardProps) => {
  const variants = {
    primary: { bgStyle: tw`bg-primary/10`, style: tw`text-theme` },
    success: { bgStyle: tw`bg-green-100`, style: tw`text-green-600` },
  };
  return (
    <Card style={[tw`p-2 rounded-xl`, variants[variant].bgStyle, bgStyle]}>
      <Icon
        style={[variants[variant].style, style]}
        height={size}
        width={size}
      />
    </Card>
  );
};

export default IconCard;
