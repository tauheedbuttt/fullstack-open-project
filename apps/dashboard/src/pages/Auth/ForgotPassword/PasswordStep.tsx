import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { IResetRequest } from "shared";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { endpoints } from "../../../config/endpoints";
import { routes } from "../../../config/routeConfig";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import useMutation from "../../../hooks/useMutation";
import { ResetFormInputs } from "../../../types/auth";
import { formikError } from "../../../utils/utils";
import { resetPasswordValidationSchema } from "../../../validations/auth";

interface PasswordStepProps {
  email: string;
  otp: string;
}

const PasswordStep = ({ email, otp }: PasswordStepProps) => {
  useBreadcrumb("Reset Password", "Create your new password");

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
      email,
      otp,
    },
    validationSchema: resetPasswordValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      verifyOtp(values);
    },
  });
  const { handleSubmit, handleChange, values } = formik;

  const fields: ResetFormInputs[] = [
    { label: "Password", type: "password", name: "password", required: true },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      required: true,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
      {fields.map((field) => (
        <Input
          key={field.name}
          id={field.name}
          error={formikError(formik, field.name, true)}
          onChange={handleChange}
          value={values[field.name]}
          onBlur={formik.handleBlur}
          {...field}
        />
      ))}
      <Button text="Reset Password" type="submit" disabled={isPending} />
    </form>
  );
};

export default PasswordStep;
