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
        <main className="bg-">{children}</main>
        <footer>Footer</footer>
      </div>
    </main>
  );
};

export default Layout;
