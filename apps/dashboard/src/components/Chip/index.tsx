import { cn } from "../../utils/utils";

interface ChipProps {
  label?: string;
  className?: string;
}

const Chip = ({ label, className }: ChipProps) => {
  return (
    <div
      className={cn(
        "bg-white text-theme rounded-full w-fit h-fit px-3 py-1 text-sm lowercase",
        className
      )}
    >
      {label}
    </div>
  );
};

export default Chip;
