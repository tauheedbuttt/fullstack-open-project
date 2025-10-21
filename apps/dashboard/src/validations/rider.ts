import { IUserStatus } from "shared";
import * as Yup from "yup";

export const riderValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Required"),
  cnic: Yup.string()
    .matches(/^[0-9]{13}$/, "Invalid CNIC")
    .required("Required"),
  sector: Yup.number().required("Required"),
  address: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .required("Required"),
  status: Yup.string()
    .oneOf(Object.values(IUserStatus), "Invalid status")
    .required("Required"),
});
