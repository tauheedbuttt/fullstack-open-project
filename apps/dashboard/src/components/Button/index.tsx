import clsx from "clsx";
import { cn } from "../../utils/utils";

type ButtonType = "primary" | "secondary" | "text";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonType;
  text?: string;
  icon?: React.ReactNode;
}

type Variant = {
  className: string;
};

type VariantProps = {
  [key in ButtonType]: Variant;
};

const Button = ({
  variant = "primary",
  text,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const variants: VariantProps = {
    primary: {
      className: cn("bg-primary text-white", !disabled && "hover:bg-primary"),
    },
    secondary: {
      className: cn("bg-gray-500 text-white", !disabled && "hover:bg-gray-600"),
    },
    text: {
      className: cn(
        "bg-transparent text-gray-700",
        !disabled && "hover:bg-gray-50"
      ),
    },
  };

  return (
    <button
      className={clsx(
        "px-4 py-2 rounded flex items-center justify-center gap-2",
        variants[variant].className,
        className,
        disabled && "opacity-50"
      )}
      disabled={disabled}
      {...props}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
