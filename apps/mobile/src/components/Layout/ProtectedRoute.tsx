import { Navigate } from "react-router-native";
import { routes } from "../../config/routeConfig";
import useAuth from "../../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { auth } = useAuth();
  return auth.role ? children : <Navigate to={routes.auth.login} />;
};

export default ProtectedRoute;
