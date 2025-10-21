import { IUser } from "shared";
import { InputProps } from "../components/Input";

export interface AdminFormInputs extends InputProps {
  name: keyof Pick<IUser, "name" | "email" | "phone"> | "password";
}
