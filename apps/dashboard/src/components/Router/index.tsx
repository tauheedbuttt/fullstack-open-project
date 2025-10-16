import { Route, Routes } from "react-router-dom";
import { authRoutes, dashboardRoutes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      {dashboardRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {/* Auth Routes */}
      {authRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default Router;
