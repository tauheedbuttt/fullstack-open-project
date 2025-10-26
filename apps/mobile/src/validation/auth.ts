import * as Yup from "yup";

import { loginValidationSchema as baseLoginValidationSchema } from "shared";

export const loginValidationSchema = Yup.object({
  ...baseLoginValidationSchema,
  rememberMe: Yup.boolean(),
});
