import { useRef, useState } from "react";
import Button from "../../../components/Button";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ForgotStepProps } from "../../../types/auth";
import OtpInput from "react-otp-input";
import Input from "../../../components/Input";

interface OTPStepProps extends ForgotStepProps {
  email: string;
}

const OTPStep = ({ email, nextStep }: OTPStepProps) => {
  useBreadcrumb("Reset Password", "Enter the OTP sent to your email");

  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOtpComplete(otp);
  };

  const onOtpComplete = (otp: string) => {
    console.log("OTP entered:", otp);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Header */}
      <div>
        <p className="text-lg ">Enter OTP</p>
        <p className="text-secondary text-md ">
          We sent a 6-digit OTP to <span className="text-theme">{email}</span>
        </p>
      </div>

      <OtpInput
        value={otp}
        onChange={(value) => {
          setOtp(value);
          if (value.length === 6) onOtpComplete(value);
        }}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <Input {...props} className="w-full" />}
        containerStyle={{
          justifyContent: "space-between",
          gap: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      {/* Actions */}
      <div className="flex flex-col gap-2 text-center">
        <p>Didn't receive the OTP?</p>
        <Button type="button" text="Resend OTP" variant="text" />
        <Button type="submit" text="Verify OTP" />
      </div>
    </form>
  );
};

export default OTPStep;
