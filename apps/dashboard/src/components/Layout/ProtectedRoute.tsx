import { Navigate } from "react-router-dom";
import { routes } from "../../config/routeConfig";
import useAuth from "../../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { auth } = useAuth();
  return auth.token ? children : <Navigate to={routes.auth.login} />;
};

export default ProtectedRoute;
