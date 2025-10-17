import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ForgotStepProps } from "../../../types/auth";

const EmailStep = ({ nextStep }: ForgotStepProps) => {
  useBreadcrumb("Reset Password", "Enter your email to receive OTP");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    console.log("Email submitted:", email);
    nextStep();
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
