import { ISettings } from "shared";
import { InputProps } from "../components/Input";

export interface SettingsFormInputs extends InputProps {
  name: keyof ISettings;
}
