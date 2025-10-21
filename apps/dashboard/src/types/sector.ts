import { ISector } from "shared";
import { InputProps } from "../components/Input";

export interface SectorFormInputs extends InputProps {
  name: keyof Pick<ISector, "name" | "fees" | "description">;
}
