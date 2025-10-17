import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ForgotStepProps } from "../../../types/auth";

const OTPStep = ({}: ForgotStepProps) => {
  useBreadcrumb("Reset Password", "Enter the OTP sent to your email");

  return <div>OTPStep</div>;
};

export default OTPStep;
