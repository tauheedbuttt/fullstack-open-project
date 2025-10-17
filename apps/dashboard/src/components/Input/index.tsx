import clsx from "clsx";
import { SearchIcon } from "../../assets";

type InputTypes = "search" | "password";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: InputTypes;
  label?: string;
  error?: string;
}

interface VariantProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ variant, className, label, error, ...props }: InputProps) => {
  const variants: Record<InputTypes, VariantProps> = {
    search: {
      icon: SearchIcon,
    },
    password: {},
  };
  const Icon = variant && variants[variant]?.icon;
  return (
    <div className={className}>
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium mb-1 block">
          {label}
        </label>
      )}
      <div
        className={clsx(
          "rounded-xl border border-gray-300 flex items-center px-3 py-[8px] bg-gray-50 gap-2 text-secondary",
          className
        )}
      >
        {Icon && <Icon />}
        <input
          className="bg-transparent outline-none flex-1 text-sm"
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
