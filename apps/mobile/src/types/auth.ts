import { IChangeProfileRequest, ILoginRequest, IResetRequest } from "shared";
import { InputProps } from "../components/Input";

export interface LoginFormInputs extends InputProps {
  name: keyof ILoginRequest;
}

export interface ResetFormInputs extends InputProps {
  name: keyof IResetRequest;
}

export interface ProfileFormInputs extends InputProps {
  name: keyof IChangeProfileRequest;
}
