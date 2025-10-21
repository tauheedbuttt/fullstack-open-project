import Avatar from "../Avatar";

interface InfoItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

const InfoWithIcon = ({ info }: { info: InfoItem[][] }) => {
  return (
    <div className="flex gap-3 ">
      {info.map((section, idx) => (
        <div
          key={idx}
          className="flex-1 flex flex-col border rounded-xl p-4 gap-4"
        >
          {section.map(({ label, value, icon }) => (
            <div key={label} className="flex gap-3 items-center">
              {icon && (
                <Avatar
                  className="bg-primary/20 !text-theme"
                  icon={icon}
                  alt={label}
                />
              )}
              <div className="flex flex-col flex-1">
                <div className="text-sm text-gray-500">{label}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfoWithIcon;
