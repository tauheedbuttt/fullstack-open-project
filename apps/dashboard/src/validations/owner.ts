import * as Yup from "yup";

export const ownerValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Required"),
  cnic: Yup.string()
    .matches(/^[0-9]{13}$/, "Invalid CNIC")
    .required("Required"),
});
