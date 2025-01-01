import { FC } from "react";

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption: string;
}
const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  defaultOption,
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-600 mb-2">{label}</label>
    <select
      className="border rounded-lg px-4 py-2"
      value={value}
      onChange={onChange}
    >
      <option value="">{defaultOption}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
