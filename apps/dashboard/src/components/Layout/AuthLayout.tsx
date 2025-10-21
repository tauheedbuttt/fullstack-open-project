import { LogoIcon } from "../../assets";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import Avatar from "../Avatar";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { title, subtitle } = useBreadcrumb();
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50  gap-6 p-4">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <header className="text-center flex flex-col gap-2 items-center justify-center">
          <Avatar alt="Logo" icon={<LogoIcon />} />
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-lg text-secondary">{subtitle}</h2>
        </header>
        <main className="bg-white rounded-lg shadow p-6">{children}</main>
        <footer className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} D-12 Admin. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AuthLayout;
