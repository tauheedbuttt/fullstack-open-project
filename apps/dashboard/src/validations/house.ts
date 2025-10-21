import * as Yup from "yup";

export const houseValidation = Yup.object({
  address: Yup.string().required("Address is required"),
  sector: Yup.number().required("Sector is required"),
  plotSize: Yup.string().required("Plot Size is required"),
  rider: Yup.number().required("Rider is required"),
  fee: Yup.number()
    .typeError("Fee must be a number")
    .required("Fee is required"),
  owner: Yup.object({
    name: Yup.string().required("Owner name is required"),
    phone: Yup.string().required("Owner phone is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Owner email is required"),
    cnic: Yup.string().required("Owner CNIC is required"),
    status: Yup.string().required("Owner status is required"),
  }),
});
