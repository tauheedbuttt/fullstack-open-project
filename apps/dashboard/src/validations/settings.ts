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

export const sectorValidation = Yup.object({
  name: Yup.string().required("Sector name is required"),
  fees: Yup.number()
    .required("Fees are required")
    .min(0, "Fees must be positive"),
});

export const settingsValidation = Yup.object({
  defaultFees: Yup.number()
    .required("Default fees are required")
    .min(0, "Default fees must be positive"),
  dueDay: Yup.number()
    .required("Due day is required")
    .min(1, "Due day must be at least 1"),
  lateFeePenalty: Yup.number()
    .required("Late fee penalty is required")
    .min(0, "Late fee penalty must be positive"),
  gracePeriod: Yup.number()
    .required("Grace period is required")
    .min(0, "Grace period must be positive"),
  isEmail: Yup.boolean().required("Email notification preference is required"),
});
