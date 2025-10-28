import { useState } from "react";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import Button from "../../../components/Button";
import LogoData from "../../../components/LogoData";
import Stepper from "../../../components/Stepper";
import { routes } from "../../../config/routeConfig";
import tw from "../../../lib/tailwind";
import EmailStep from "./EmailStep";
import OTPStep from "./OTPStep";
import PasswordStep from "./PasswordStep";

export default function ForgetPasswordScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const nextStep = (otp?: string) => {
    if (otp) setOtp(otp);
    setStep((prev) => prev + 1);
  };

  const steps: {
    [key in number]: {
      component: React.ReactNode;
      description: string;
    };
  } = {
    1: {
      component: (
        <EmailStep nextStep={nextStep} email={email} setEmail={setEmail} />
      ),
      description: "Enter your email to receive OTP",
    },
    2: {
      component: <OTPStep nextStep={nextStep} email={email} />,
      description: "Enter the OTP sent to your email",
    },
    3: {
      component: <PasswordStep email={email} otp={otp} />,
      description: "Set your new password",
    },
  };
  return (
    <View style={tw`flex-1 gap-10`}>
      <LogoData
        title="Reset Password"
        description={steps[step].description}
        style={tw`mt-10`}
      />
      <View style={tw`px-7 flex-1`}>
        <Stepper
          currentStep={step}
          setStep={setStep}
          steps={Object.values(steps).map((step) => ({
            label: "",
            description: "",
          }))}
        />
        <View style={tw`mt-5 mb-4 pb-7 border-b-[0.2px] border-secondary`}>
          {steps[step].component}
        </View>
        <Button
          text="← Back to Login"
          variant="text"
          onPress={() => navigate(routes.auth.login)}
        />
      </View>
    </View>
  );
}
