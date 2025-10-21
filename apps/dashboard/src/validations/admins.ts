import * as Yup from "yup";

export const adminValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
