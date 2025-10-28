import { useFormik } from "formik";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../config/routeConfig";
import Button from "../../components/Button";
import { loginValidationSchema } from "../../validations/auth";
import { formikError } from "../../utils/utils";
import { LoginFormInputs } from "../../types/auth";
import { ILoginRequest, ILoginResponse } from "shared";
import useMutation from "../../hooks/useMutation";
import { endpoints } from "../../config/endpoints";
import useAuth from "../../hooks/useAuth";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  useBreadcrumb("Neighborhood Fee Management", "D-12 Admin Dashboard");

  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const { mutate: login } = useMutation<ILoginRequest, ILoginResponse>(
    endpoints.auth.login,
    {
      onSuccess: (res) => {
        console.log("Login successful", res);
        onLogin(res.token);
        navigate(routes.dashboard);
      },
    }
  );

  const formik = useFormik<ILoginRequest>({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });
  const { handleSubmit, handleChange, values } = formik;

  const fields: LoginFormInputs[] = [
    { label: "Email", type: "email", name: "email", required: true },
    { label: "Password", type: "password", name: "password", required: true },
  ];

  return (
    <div>
      <h1 className="text-xl ">Welcome Back!</h1>
      <h1 className="text-md text-secondary">
        Sign in to access the admin dashboard
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        {fields.map((field) => (
          <Input
            key={field.name}
            id={field.name}
            error={formikError(formik, field.name)}
            onChange={handleChange}
            value={values[field.name]}
            onBlur={formik.handleBlur}
            {...field}
          />
        ))}
        <div className="flex items-center justify-between">
          <Link to={routes.auth.forgotPassword} className="text-sm text-theme">
            Forgot Password?
          </Link>
        </div>
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
