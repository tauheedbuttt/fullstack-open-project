import { useFormik } from "formik";
import { View } from "react-native";
import { formikError, ILoginRequest, ILoginResponse, IUserRole } from "shared";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LogoData from "../../components/LogoData";
import tw from "../../lib/tailwind";
import { LoginFormInputs } from "../../types/auth";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import { routes } from "../../config/routeConfig";
import { loginValidationSchema } from "../../validation/auth";
import useAuth from "../../hooks/useAuth";
import { endpoints } from "../../config/endpoints";
import useMutation from "../../hooks/useMutation";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const [role, setRole] = useState<IUserRole | undefined>();

  const { mutate: login, isPending } = useMutation<
    ILoginRequest,
    ILoginResponse
  >(endpoints.auth.login.replace(":role", `${role}`), {
    onSuccess: (res) => {
      if (!role) return;
      onLogin(role, res.token);
      const baseHome =
        role === IUserRole.OWNER ? routes.owner.home : routes.rider.home;
      navigate(baseHome);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      if (!role) return;
      login(values);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  const fields: LoginFormInputs[] = [
    { label: "Email", placeholder: "Enter your email", name: "email" },
    {
      label: "Password",
      placeholder: "Enter your password",
      name: "password",
      variant: "password",
    },
  ];

  const onSubmit = (role: IUserRole | undefined) => {
    setRole(role);
    handleSubmit();
  };
  const onForgotPassword = () => navigate(routes.auth.forgetPassword);

  return (
    <View style={tw`flex-1`}>
      <LogoData
        title="Welcome Back"
        description="Sign in to continue"
        style={tw`mt-10`}
      />
      {/* Form */}
      <View style={tw`px-7 mt-10 flex-col gap-5`}>
        {/* Fields */}
        <View style={tw`flex-col gap-5`}>
          {fields.map((field) => (
            <Input
              {...field}
              key={field.name}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              error={formikError(formik, field.name)}
            />
          ))}
          {/* Forget Password */}
          <Button
            text="Forgot Password?"
            variant="text"
            textStyle={tw`text-theme text-sm`}
            style={tw`self-end`}
            onPress={onForgotPassword}
          />
        </View>
        {/* Actions */}
        <View style={tw`mt-6 gap-2`}>
          <Button
            text="Login as Owner"
            onPress={() => onSubmit(IUserRole.OWNER)}
            disabled={isPending}
          />
          <Button
            text="Login as Rider"
            variant="white"
            onPress={() => onSubmit(IUserRole.RIDER)}
            disabled={isPending}
          />
        </View>
      </View>
    </View>
  );
}
