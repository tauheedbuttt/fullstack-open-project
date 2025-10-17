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

  const nextStep = () => setStep((prev) => prev + 1);

  const steps: { [key in number]: JSX.Element } = {
    1: <EmailStep nextStep={nextStep} />,
    2: <OTPStep nextStep={nextStep} />,
    3: <PasswordStep nextStep={nextStep} />,
  };

  return (
    <div className="flex flex-col gap-2">
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
