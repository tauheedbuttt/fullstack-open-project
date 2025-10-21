import useBreadcrumb from "../../hooks/useBreadcrumb";
import Admins from "./Admins";
import Sectors from "./Sectors";

const Settings = () => {
  useBreadcrumb("Settings", "Manage system preferences and configurations.");
  return (
    <div className="flex flex-col gap-6">
      {/* System Preferences */}
      <Sectors />
      <Admins />
    </div>
  );
};

export default Settings;
