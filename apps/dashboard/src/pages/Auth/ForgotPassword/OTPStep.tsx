import { useState } from "react";
import OtpInput from "react-otp-input";
import { IForgotRequest, IVerifyOtpRequest } from "shared";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { endpoints } from "../../../config/endpoints";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import useMutation from "../../../hooks/useMutation";

interface OTPStepProps {
  email: string;
  nextStep: (otp: string) => void;
}

const OTPStep = ({ email, nextStep }: OTPStepProps) => {
  useBreadcrumb("Reset Password", "Enter the OTP sent to your email");

  const [otp, setOtp] = useState("");

  const { mutate: forgot, isPending: isForgotPending } =
    useMutation<IForgotRequest>(endpoints.auth.forgot, {
      onSuccess: () => {
        console.log("OTP resent successfully");
      },
    });
  const { mutate: verifyOtp, isPending } = useMutation<IVerifyOtpRequest>(
    endpoints.auth.verifyOtp,
    {
      onSuccess: () => {
        nextStep(otp);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOtpComplete(otp);
  };

  const onOtpComplete = (otp: string) => {
    verifyOtp({ otp, email });
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
        renderInput={(props) => <Input {...props} />}
        containerStyle={{
          justifyContent: "center",
          gap: 5,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      {/* Actions */}
      <div className="flex flex-col gap-2 text-center">
        <p>Didn't receive the OTP?</p>
        <Button
          type="button"
          text="Resend OTP"
          onClick={() => forgot({ email })}
          variant="text"
          disabled={isForgotPending}
        />
        <Button type="submit" text="Verify OTP" disabled={isPending} />
      </div>
    </form>
  );
};

export default OTPStep;
