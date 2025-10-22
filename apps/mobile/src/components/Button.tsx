import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Style } from "twrnc";
import tw from "../lib/tailwind";

type ButtonVariants = "primary" | "secondary" | "outlined" | "text";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariants;
  text?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: Style;
  textStyle?: Style;
}

type VariantProps = {
  [key in ButtonVariants]: {
    style: Style;
    textStyle: Style;
  };
};

const Button = ({
  variant = "primary",
  text,
  icon,
  disabled,
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const variants: VariantProps = {
    primary: {
      style: tw.style("bg-primary", !disabled && "hover:bg-primary"),
      textStyle: tw`text-white`,
    },
    secondary: {
      style: tw.style("bg-gray-300", !disabled && "hover:bg-gray-600"),
      textStyle: tw`text-secondary`,
    },
    text: {
      style: tw.style("bg-transparent", !disabled && "hover:bg-gray-50"),
      textStyle: tw`text-gray-700`,
    },
    outlined: {
      style: tw.style(
        "border border-gray-300",
        !disabled && "hover:bg-gray-50"
      ),
      textStyle: tw`text-gray-700`,
    },
  };
  return (
    <TouchableOpacity
      style={tw.style(
        "px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm",
        variants[variant].style,
        style,
        disabled && "opacity-50"
      )}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}
    >
      {icon}
      {text && (
        <Text style={tw.style(variants[variant].textStyle, textStyle)}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
