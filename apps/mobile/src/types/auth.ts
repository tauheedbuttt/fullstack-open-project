import { ILoginRequest } from "shared";
import { InputProps } from "../components/Input";

export interface LoginFormInputs extends InputProps {
  name: keyof ILoginRequest;
}
