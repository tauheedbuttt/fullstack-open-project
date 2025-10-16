import Breadcrumb from "./Breadcrumb";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col border">
        <Header />
        <div className="bg-gray-50 h-full w-full px-6 py-2">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
