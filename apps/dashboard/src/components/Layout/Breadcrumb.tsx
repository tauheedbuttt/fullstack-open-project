import { useDispatch } from "react-redux";
import { useActionContext } from "../../context/ActionContext";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import { AppDispatch } from "../../store";
import { setModal } from "../../store/modalSlice";
import Button from "../Button";

const Breadcrumb = () => {
  const { title, subtitle } = useBreadcrumb();
  const { actions } = useActionContext();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center justify-between px-6">
      <div className="py-6 flex flex-col gap-1">
        <h3 className="text-2xl">{title}</h3>
        <span className="text-[15px] text-secondary">{subtitle}</span>
      </div>
      {actions && (
        <div className="flex gap-2">
          {actions.map((action, actionIndex) => (
            <Button
              key={actionIndex}
              onClick={(e) => {
                e.stopPropagation();
                if (action.onClick) action.onClick();
                if (action.modal)
                  dispatch(setModal({ key: action.modal, open: true }));
              }}
              icon={action.icon}
              text={action.text}
              className="!p-2"
              variant={action.variant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
