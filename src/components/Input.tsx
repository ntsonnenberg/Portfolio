import React from "react";
interface Props {
  label: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  name,
  required,
  type,
  placeholder,
  className,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label
        htmlFor={name}
        className="phone:text-sm tablet:text-md laptop:text-lg"
      >
        {label} {required && <p className="inline text-sm align-top">*</p>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 decoration-none bg-[#050A30] rounded-md focus:ring-1 focus:ring-primary focus:outline-0"
      />
    </div>
  );
}
