import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Button from "../Button";
import { SearchIcon } from "../../../assets";
import { SvgProps } from "react-native-svg";
import { Style } from "twrnc";
import ImageInput from "./ImageInput";

type InputTypes = "password" | "search" | "image";

export interface InputProps extends TextInputProps {
  variant?: InputTypes;
  label?: string;
  subLabel?: string;
  error?: string;
  options?: { value: any; label: string }[];
  containerClassName?: Style;
}

interface VariantProps {
  icon?: React.FC<SvgProps>;
  component?: React.JSX.Element;
  type?: React.HTMLInputTypeAttribute;
  containerClassName?: string;
}

const Input = ({ label, error, containerClassName, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const variants: Record<InputTypes, VariantProps> = {
    password: {},
    search: {
      icon: SearchIcon,
    },
    image: {
      component: <ImageInput {...props} />,
    },
  };

  const component = props.variant && variants[props.variant]?.component;
  const Icon = props.variant && variants[props.variant]?.icon;

  return (
    <View>
      {label && (
        <Text style={tw`text-lg font-medium text-primary`}>{label}</Text>
      )}
      {component}
      {!component && (
        <View
          style={tw.style(
            `mt-2 px-4 py-4 flex-row items-center rounded-lg bg-gray-50`,
            containerClassName
          )}
        >
          {Icon && (
            <Icon width={20} height={20} style={tw`mr-3 text-secondary`} />
          )}
          <TextInput
            {...props}
            style={tw` text-primary p-0 m-0 flex-1`}
            autoCapitalize={"none"}
            secureTextEntry={props.variant === "password" && !showPassword}
          />
          {props.variant === "password" && (
            <Button
              onPress={() => setShowPassword(!showPassword)}
              text={showPassword ? "Hide" : "Show"}
              variant="text"
              style={tw`p-0`}
              textStyle={tw`text-sm`}
            />
          )}
        </View>
      )}
      {error && <Text style={tw`mt-2 ml-1 text-sm text-danger`}>{error}</Text>}
    </View>
  );
};

export default Input;
