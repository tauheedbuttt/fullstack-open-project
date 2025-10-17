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
  const isAuth = routes.login === location.pathname;
  return isAuth ? (
    <AuthLayout>{children}</AuthLayout>
  ) : (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col border">
        <Header />
        <main className="bg-gray-50 h-full w-full px-6 py-2">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
