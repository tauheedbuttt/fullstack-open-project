import { InputProps } from "../components/Input";

export interface LoginForm {
  email: string;
  password: string;
}

export interface ResetForm {
  password: string;
  confirmPassword: string;
}

export interface LoginFormInputs extends InputProps {
  name: keyof LoginForm;
}

export interface ResetFormInputs extends InputProps {
  name: keyof ResetForm;
}

export interface ForgotStepProps {
  nextStep: VoidFunction;
}
