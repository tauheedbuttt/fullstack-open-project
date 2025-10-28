import { Alert, View } from "react-native";
import { IForgotRequest } from "shared";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { endpoints } from "../../../config/endpoints";
import useMutation from "../../../hooks/useMutation";
import tw from "../../../lib/tailwind";

type Props = {
  nextStep: () => void;
  setEmail: (email: string) => void;
  email: string;
};

const EmailStep = ({ nextStep, email, setEmail }: Props) => {
  const { mutate: forgot, isPending } = useMutation<IForgotRequest>(
    endpoints.auth.forgot,
    {
      onSuccess: nextStep,
    }
  );

  const onSend = () => {
    if (!email) return Alert.alert("Error", "Please enter your email");
    forgot({ email });
  };
  return (
    <View style={tw`flex-col gap-5`}>
      <Input
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Button text="Send OTP" onPress={onSend} disabled={isPending} />
    </View>
  );
};

export default EmailStep;
