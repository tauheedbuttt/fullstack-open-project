import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ForgotStepProps } from "../../../types/auth";

const PasswordStep = ({}: ForgotStepProps) => {
  useBreadcrumb("Reset Password", "Create your new password");

  return <div>PasswordStep</div>;
};

export default PasswordStep;
