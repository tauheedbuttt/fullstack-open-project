import { useFormik } from "formik";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ForgotStepProps, ResetFormInputs } from "../../../types/auth";
import Input from "../../../components/Input";
import { formikError } from "../../../utils/utils";
import Button from "../../../components/Button";
import { resetPasswordValidationSchema } from "../../../validations/auth";

const PasswordStep = ({}: ForgotStepProps) => {
  useBreadcrumb("Reset Password", "Create your new password");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      <Button text="Reset Password" type="submit" />
    </form>
  );
};

export default PasswordStep;
