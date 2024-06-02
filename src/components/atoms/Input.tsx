import { InputProps } from "@/types/input.types";
import { ChangeEvent, useState } from "react";

export default function Input({
  type,
  label,
  onChange,
  className,
  value,
  error,
  ...rest
}: InputProps) {
  const [_value, setValue] = useState<string>(value?.toString() || "");

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onChange && onChange(e);
  }

  return (
    <div className="py-2">
      <label className="block text-base pb-1">{label}</label>
      <input
        value={_value}
        onChange={handleOnChange}
        // required
        type={type || "text"}
        className={` ${
          rest.disabled ? "bg-gray-200" : ""
        } border border-gray-600 rounded text-base h-12 block w-full focus:outline-none px-3 ${className}`}
        {...rest}
      />
      {error && (
        <p className="text-xs font-medium leading-3 mt-1 text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
