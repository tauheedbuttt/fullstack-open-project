import { FormikProps } from "formik";

export const formikError = <T>(formik: FormikProps<T>, fieldName: keyof T) => {
  return formik.errors[fieldName] ? formik.errors[fieldName] : undefined;
};
