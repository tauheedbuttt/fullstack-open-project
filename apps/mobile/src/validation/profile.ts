import * as yup from "yup";

export const profileValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email (e.g. user@example.com)")
    .required("Email is required"),
  phone: yup
    .string()
    // Require E.164 format (e.g. +1234567890)
    .matches(
      /^\+[1-9]\d{1,14}$/,
      "Invalid phone number (use E.164 format, e.g. +1234567890)"
    )
    .required("Phone number is required"),
});
