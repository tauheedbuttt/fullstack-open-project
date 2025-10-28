import { useFormik } from "formik";
import { Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import Button from "../../../components/Button";
import tw from "../../../lib/tailwind";
import {
  formikError,
  IForgotRequest,
  IVerifyOtpRequest,
  otpValidationSchema,
} from "shared";
import useMutation from "../../../hooks/useMutation";
import { endpoints } from "../../../config/endpoints";

type Props = {
  nextStep: (otp: string) => void;
  email: string;
};

const OTPStep = ({ nextStep, email }: Props) => {
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
        nextStep(formik.values.otp);
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpValidationSchema,
    onSubmit: (values) => {
      verifyOtp({ ...values, email });
    },
  });

  const { setValues, handleSubmit } = formik;

  const onVerify = () => {
    handleSubmit();
  };

  const onResend = () => {
    forgot({ email });
  };

  const error = formikError(formik, "otp");

  return (
    <View>
      <Text style={tw`text-lg font-semibold`}>Enter OTP</Text>
      <Text style={tw` text-secondary`}>
        We sent a 4 digit OTP to <Text style={tw`text-theme`}>{email}</Text>
      </Text>
      <OtpInput
        numberOfDigits={6}
        focusColor="green"
        autoFocus={false}
        hideStick={true}
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onTextChange={(text) => setValues({ otp: `${text}` })}
        onFilled={onVerify}
        theme={{
          containerStyle: tw` mt-5 mb-5`,
          pinCodeContainerStyle: tw`w-12 h-12 bg-primary/10 border-primary/10 `,
          pinCodeTextStyle: tw`text-xl`,
          focusedPinCodeContainerStyle: tw`border-primary`,
        }}
      />
      {error && <Text style={tw`mt-2 ml-1 text-sm text-danger`}>{error}</Text>}

      <Text style={tw`text-center my-5`}>Didn't receive the OTP?</Text>
      <Button
        text="Resend OTP"
        onPress={onResend}
        style={tw`mb-2`}
        variant="text"
        disabled={isForgotPending}
      />
      <Button text="Verify OTP" onPress={onVerify} disabled={isPending} />
    </View>
  );
};

export default OTPStep;
