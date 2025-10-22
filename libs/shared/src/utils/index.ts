import { FormikProps } from "formik";

export const formikError = <T>(
  formik: FormikProps<T>,
  fieldName: string | keyof T,
  runtimeCheck = false
) => {
  const get = (obj: any, path: string | number | (string | number)[]) => {
    if (obj == null) return undefined;
    const parts = Array.isArray(path)
      ? path
      : String(path)
          .replace(/\[(\d+)\]/g, ".$1")
          .split(".");
    return parts.reduce(
      (acc: any, key: string | number) => (acc != null ? acc[key] : undefined),
      obj
    );
  };

  const path = String(fieldName);
  const error = get(formik.errors, path);
  let isShowError = !!error;
  if (!runtimeCheck) isShowError = isShowError && !!get(formik.touched, path);
  return isShowError ? error : undefined;
};
