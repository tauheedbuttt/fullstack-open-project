import clsx from "clsx";
import { SearchIcon } from "../../assets";

type InputTypes = "search" | "password";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: InputTypes;
}

interface VariantProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ variant, className, ...props }: InputProps) => {
  const variants: Record<InputTypes, VariantProps> = {
    search: {
      icon: SearchIcon,
    },
    password: {},
  };
  const Icon = variant && variants[variant]?.icon;
  return (
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
  );
};

export default Input;
