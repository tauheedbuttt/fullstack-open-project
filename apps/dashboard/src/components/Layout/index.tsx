import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { routes } from "../../config/routeConfig";
import AuthLayout from "./AuthLayout";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isAuth = Object.values(routes.auth).includes(location.pathname);
  const notFound =
    [...Object.values(routes), ...Object.values(routes.auth)].includes(
      location.pathname
    ) === false;

  return isAuth ? (
    <AuthLayout>{children}</AuthLayout>
  ) : notFound ? (
    children
  ) : (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col border">
        <Header />
        <main className="bg-gray-50 h-full w-full px-6 py-2 flex justify-center">
          <div className="flex flex-col w-full lg:max-w-7xl">
            <Breadcrumb />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
