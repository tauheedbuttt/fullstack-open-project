import { IUserRole } from "./user.types";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IChangeProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface ILoginResponse {
  token: string;
  role: IUserRole;
}

export interface IForgotRequest {
  email: string;
}

export interface IVerifyOtpRequest extends IForgotRequest {
  otp: string;
}

export interface IResetRequest extends IVerifyOtpRequest {
  password: string;
  confirmPassword: string;
}
