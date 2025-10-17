import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").required("Required"),
  rememberMe: Yup.boolean(),
});
