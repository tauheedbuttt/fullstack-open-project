import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { routes } from "../../../config/routeConfig";
import { ArrowLeftIcon } from "../../../assets";
import { JSX, useState } from "react";
import EmailStep from "./EmailStep";
import PasswordStep from "./PasswordStep";
import OTPStep from "./OTPStep";
import Stepper from "../../../components/Stepper";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const nextStep = (otp?: string) => {
    setStep((prev) => prev + 1);
    if (otp) setOtp(otp);
  };

  const steps: { [key in number]: JSX.Element } = {
    1: <EmailStep nextStep={nextStep} setEmail={setEmail} />,
    2: <OTPStep nextStep={nextStep} email={email} />,
    3: <PasswordStep email={email} otp={otp} />,
  };

  return (
    <div className="flex flex-col gap-3">
      <Stepper
        steps={Object.keys(steps).map((key) => ({
          label: ``,
          description: ``,
        }))}
        currentStep={step}
        setStep={setStep}
      />
      {steps[step]}
      <div className="separator" />
      <Button
        text="Back to Login"
        variant="text"
        icon={<ArrowLeftIcon />}
        onClick={() => navigate(routes.auth.login)}
      />
    </div>
  );
};

export default ForgotPassword;
