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
      <div
        className={`relative inline-block bg-transparent w-full phone:py-1 phone:h-6 tablet:h-8 laptop:py-0 laptop:h-8 ${className}`}
      >
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="peer w-full h-full decoration-none bg-transparent border-b-2 pl-2 focus:border-0 focus:outline-0"
        />
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 peer-focus:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 peer-focus:h-full"></span>
      </div>
    </div>
  );
}
