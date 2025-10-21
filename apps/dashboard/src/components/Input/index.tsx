import clsx from "clsx";
import { SearchIcon } from "../../assets";
import Select from "./Select";

type InputTypes = "search" | "password" | "select" | "toggle";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: InputTypes;
  label?: string;
  subLabel?: string;
  error?: string;
  inputClassName?: string;
  options?: { value: any; label: string }[];
}

export interface BaseComponentProps {
  className: string;
}

interface VariantProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  component?: React.FC<BaseComponentProps>;
  type?: React.HTMLInputTypeAttribute;
  containerClassName?: string;
}

const Input = ({
  variant,
  className,
  label,
  subLabel,
  error,
  inputClassName,
  ...props
}: InputProps) => {
  const variants: Record<InputTypes, VariantProps> = {
    search: {
      icon: SearchIcon,
    },
    select: {
      component: Select,
    },
    password: {},
    toggle: {
      containerClassName: "!flex-row items-center justify-between",
    },
  };
  const Icon = variant && variants[variant]?.icon;
  const Component = variant && variants[variant]?.component;
  const containerClassName = variant && variants[variant]?.containerClassName;
  return (
    <div
      className={clsx("flex flex-col text-sm", className, containerClassName)}
    >
      <div>
        {label && (
          <label htmlFor={props.id} className="text-sm font-medium mb-1 block">
            {label}
          </label>
        )}
        {subLabel && (
          <label
            htmlFor={props.id}
            className="text-xs font-light text-secondary mb-1 block"
          >
            {subLabel}
          </label>
        )}
      </div>
      {Component && (
        <Component className={clsx("w-full", inputClassName)} {...props} />
      )}
      {!Component && (
        <div
          className={clsx(
            "rounded-xl border border-gray-300 flex items-center px-3 py-[8px] bg-gray-50 gap-2 text-secondary",
            className,
            inputClassName
          )}
        >
          {Icon && <Icon />}
          <input
            className="bg-transparent outline-none flex-1 text-sm"
            {...props}
          />
        </div>
      )}
      {error && <p className="text-sm text-danger mt-1">{error}</p>}
    </div>
  );
};

export default Input;
