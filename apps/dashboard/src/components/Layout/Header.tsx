import { NotificationIcon } from "../../assets";
import Avatar from "../Avatar";
import Button from "../Button";
import Input from "../Input";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 fixed top-0 right-0 left-64 z-10 flex items-center justify-between gap-4 px-4">
      {/* search & notifications */}
      <div className="flex-1 flex items-center gap-4 justify-between border-r pr-2">
        <Input
          variant="search"
          placeholder="Search houses, riders..."
          className="w-[50%]"
        />
        <Button variant="text" icon={<NotificationIcon />} />
      </div>
      {/* Profile Dropdown */}
      <div className="flex items-center gap-4">
        <Avatar alt="User Avatar" />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="text-sm text-gray-500">johndoe@example.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
