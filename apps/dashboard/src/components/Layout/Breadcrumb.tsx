import { useActionContext } from "../../context/ActionContext";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import Button from "../Button";

const Breadcrumb = () => {
  const { title, subtitle } = useBreadcrumb();
  const { actions } = useActionContext();
  return (
    <div className="flex items-center justify-between ">
      <div className="py-6 flex flex-col gap-1">
        <h3 className="text-2xl">{title}</h3>
        <span className="text-[15px] text-secondary">{subtitle}</span>
      </div>
      {actions && (
        <div className="flex gap-1">
          {actions.map((action, actionIndex) => (
            <Button
              key={actionIndex}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick(null);
              }}
              icon={action.icon}
              text={action.text}
              className="!p-2"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
