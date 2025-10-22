import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Button from "../Button";

type InputTypes = "password";

export interface InputProps extends TextInputProps {
  variant?: InputTypes;
  label?: string;
  subLabel?: string;
  error?: string;
  options?: { value: any; label: string }[];
}

interface VariantProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  component?: React.JSX.Element;
  type?: React.HTMLInputTypeAttribute;
  containerClassName?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const variants: Record<InputTypes, VariantProps> = {
    password: {},
  };

  const component = props.variant && variants[props.variant]?.component;

  return (
    <View>
      {label && (
        <Text style={tw`text-lg font-medium text-primary`}>{label}</Text>
      )}
      {component}
      {!component && (
        <View
          style={tw`mt-2 px-4 py-4 flex-row items-center rounded-lg bg-gray-50`}
        >
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
            />
          )}
        </View>
      )}
      {error && <Text style={tw`mt-2 ml-1 text-sm text-danger`}>{error}</Text>}
    </View>
  );
};

export default Input;
