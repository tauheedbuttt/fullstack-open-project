import { Route, Routes } from "react-router-dom";
import { authRoutes, dashboardRoutes } from "./routes";
import NotFound from "../../pages/NotFound";

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

      {/* Fallbacks */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
