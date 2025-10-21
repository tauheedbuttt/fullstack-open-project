import * as Yup from "yup";

export const reportValidation = Yup.object({
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date cannot be before start date")
    .required("End date is required"),
  sector: Yup.string().optional(),
  rider: Yup.string().optional(),
});
