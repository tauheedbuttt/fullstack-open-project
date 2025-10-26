import { Alert, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import tw from "../../../lib/tailwind";

type Props = {
  nextStep: () => void;
  setEmail: (email: string) => void;
  email: string;
};

const EmailStep = ({ nextStep, email, setEmail }: Props) => {
  const onSend = () => {
    if (!email) return Alert.alert("Error", "Please enter your email");
    nextStep();
  };
  return (
    <View style={tw`flex-col gap-5`}>
      <Input
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Button text="Send OTP" onPress={onSend} />
    </View>
  );
};

export default EmailStep;
