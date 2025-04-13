type SwitchProps = {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
};

export function Switch({
  id,
  checked,
  disabled = false,
  onChange,
  className = "",
}: SwitchProps) {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        relative inline-flex items-center flex-shrink-0 w-10 h-5 rounded-full
        transition-colors duration-300 ease-in-out
        ${checked ? "bg-blue-500" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span
        className={`
          inline-block w-4 h-4 bg-white rounded-full shadow transform
          transition-transform duration-300 ease-in-out
          ${checked ? "translate-x-5" : "translate-x-0.5"}
        `}
      />
    </button>
  );
}
