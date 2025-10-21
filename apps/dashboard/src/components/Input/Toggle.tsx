import { BaseComponentProps } from ".";

interface ToggleProps extends BaseComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};

export default Toggle;
