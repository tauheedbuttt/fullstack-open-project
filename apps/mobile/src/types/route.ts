import { AppHeaderProps } from "../components/Layout/Header";

export interface Route extends AppHeaderProps {
  route: string;
  element: React.FC;
}
