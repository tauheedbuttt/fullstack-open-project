import { FormikProps } from "formik";

export const formikError = <T>(
  formik: FormikProps<T>,
  fieldName: keyof T,
  runtimeCheck = false
) => {
  let isShowError = !!formik.errors[fieldName];
  if (!runtimeCheck) isShowError = isShowError && !!formik.touched[fieldName];
  return isShowError ? formik.errors[fieldName] : undefined;
};

export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(" ");
};
