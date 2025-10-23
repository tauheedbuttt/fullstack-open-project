export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IResetRequest {
  password: string;
  confirmPassword: string;
}
