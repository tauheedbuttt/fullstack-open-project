import { IForgotRequest } from "shared";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { endpoints } from "../../../config/endpoints";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import useMutation from "../../../hooks/useMutation";
import { ForgotStepProps } from "../../../types/auth";

interface EmailStepProps extends ForgotStepProps {
  setEmail: (email: string) => void;
}

const EmailStep = ({ setEmail, nextStep }: EmailStepProps) => {
  useBreadcrumb("Reset Password", "Enter your email to receive OTP");

  const { mutate: forgot } = useMutation<IForgotRequest>(
    endpoints.auth.forgot,
    {
      onSuccess: (res) => {
        console.log("Forgot password successful", res);
        nextStep();
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    forgot({ email });
    setEmail(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <Button text="Send OTP" />
    </form>
  );
};

export default EmailStep;
