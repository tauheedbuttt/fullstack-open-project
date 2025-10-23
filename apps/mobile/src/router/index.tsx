import { NativeRouter, Route, Routes } from "react-router-native";
import {
  authRoutes,
  onboardingRoutes,
  ownerRoutes,
  riderRoutes,
} from "./routes";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/Layout/ProtectedRoute";

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        {onboardingRoutes.map(({ route, element: Element }) => (
          <Route
            key={route}
            path={route}
            element={
              <Layout showAppBar={false}>
                <Element />
              </Layout>
            }
          />
        ))}
        {authRoutes.map(({ route, element: Element }) => (
          <Route
            key={route}
            path={route}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        ))}

        {[...ownerRoutes, ...riderRoutes].map(({ route, element: Element }) => (
          <Route
            key={route}
            path={route}
            element={
              <ProtectedRoute>
                <Layout showTabBar={true}>
                  <Element />
                </Layout>
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </NativeRouter>
  );
};

export default Router;
