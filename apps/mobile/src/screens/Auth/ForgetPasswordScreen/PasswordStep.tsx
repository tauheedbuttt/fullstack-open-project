import { View } from "react-native";
import { useFormik } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ResetFormInputs } from "../../../types/auth";
import {
  formikError,
  IResetRequest,
  resetPasswordValidationSchema,
} from "shared";
import tw from "../../../lib/tailwind";
import { endpoints } from "../../../config/endpoints";
import useMutation from "../../../hooks/useMutation";
import { useNavigate } from "react-router-native";
import { routes } from "../../../config/routeConfig";

interface PasswordStepProps {
  email: string;
  otp: string;
}

const PasswordStep = ({ email, otp }: PasswordStepProps) => {
  const navigate = useNavigate();
  const { mutate: verifyOtp, isPending } = useMutation<IResetRequest>(
    endpoints.auth.resetPassword,
    {
      onSuccess: () => navigate(routes.auth.login),
    }
  );

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
      verifyOtp({ ...values, email, otp });
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  const onSubmit = () => {
    handleSubmit();
  };

  const fields: ResetFormInputs[] = [
    {
      label: "Password",
      placeholder: "Enter your password",
      name: "password",
      variant: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm your password",
      name: "confirmPassword",
      variant: "password",
    },
  ];

  return (
    <View style={tw`gap-5`}>
      {fields.map((field) => (
        <Input
          {...field}
          key={field.name}
          value={values[field.name as keyof typeof values]}
          onChangeText={handleChange(field.name)}
          error={formikError(formik, field.name)}
        />
      ))}
      <Button text="Reset Password" onPress={onSubmit} disabled={isPending} />
    </View>
  );
};

export default PasswordStep;
