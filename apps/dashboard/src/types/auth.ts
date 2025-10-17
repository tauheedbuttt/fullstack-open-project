import { InputProps } from "../components/Input";

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginFormInputs extends InputProps {
  name: keyof LoginForm;
}
