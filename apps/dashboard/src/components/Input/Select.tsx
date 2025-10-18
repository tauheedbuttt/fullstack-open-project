import clsx from "clsx";
import { BaseComponentProps } from ".";

interface SelectProps extends BaseComponentProps {
  options?: { value: string; label: string }[];
}

const Select = ({ className, options, ...props }: SelectProps) => {
  return (
    <select
      className={clsx(
        "h-full rounded-xl border border-gray-300 flex items-center px-3 py-[8px] bg-gray-50 gap-2 text-secondary",
        className
      )}
      {...props}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
