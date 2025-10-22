import { NativeRouter, Route, Routes } from "react-router-native";
import { onboardingRoutes } from "./routes";

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        {onboardingRoutes.map(({ route, element: Element }) => (
          <Route key={route} path={route} element={<Element />} />
        ))}
      </Routes>
    </NativeRouter>
  );
};

export default Router;
