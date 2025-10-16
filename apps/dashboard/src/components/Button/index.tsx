import clsx from "clsx";

type ButtonType = "primary" | "secondary" | "text";

interface ButtonProps {
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

const Button = ({ variant = "primary", text, icon }: ButtonProps) => {
  const variants: VariantProps = {
    primary: {
      className: "bg-primary text-white hover:bg-primary",
    },
    secondary: {
      className: "bg-gray-500 text-white hover:bg-gray-600",
    },
    text: {
      className: "bg-transparent text-gray-700 hover:bg-gray-50",
    },
  };

  return (
    <button
      className={clsx(
        "px-4 py-2 rounded flex items-center gap-2",
        variants[variant].className
      )}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
