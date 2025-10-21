import { InputProps } from "../components/Input";

interface ReportForm {
  startDate: string;
  endDate: string;
  sector?: string;
  rider?: string;
}

export interface ReportFormInputs extends InputProps {
  name: keyof ReportForm;
}
