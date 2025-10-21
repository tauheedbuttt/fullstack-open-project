import * as Yup from "yup";

export const sectorValidation = Yup.object({
  name: Yup.string().required("Sector name is required"),
  fees: Yup.number()
    .required("Fees are required")
    .min(0, "Fees must be positive"),
});
