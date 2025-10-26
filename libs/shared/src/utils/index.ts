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

export function formatNumberAbbr(num: number): string {
  if (num < 1000) {
    return num.toString();
  }
  const units = ["K", "M", "B", "T"];
  let unitIndex = -1;
  let value = num;
  while (value >= 1000 && unitIndex < units.length - 1) {
    value = value / 1000;
    unitIndex++;
  }
  // Remove unnecessary decimals, keep 1 decimal only if needed
  const rounded =
    value % 1 === 0
      ? value.toFixed(0)
      : value < 10
      ? value.toFixed(1)
      : value.toFixed(0);
  return `${rounded}${units[unitIndex]}`;
}
