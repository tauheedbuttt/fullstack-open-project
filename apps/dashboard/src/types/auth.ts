import { ILoginRequest, IResetRequest } from "shared";
import { InputProps } from "../components/Input";

export interface LoginFormInputs extends InputProps {
  name: keyof ILoginRequest;
}

export interface ResetFormInputs extends InputProps {
  name: keyof IResetRequest;
}

export interface ForgotStepProps {
  nextStep: VoidFunction;
}
