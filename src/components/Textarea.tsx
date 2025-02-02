import { resourceUsage } from "process";
import React from "react";

type Props = {
  label: string;
  placeholder?: string;
  className?: string;
  name: string;
  required?: boolean;
};

export default function Textarea({
  className,
  label,
  name,
  required,
  placeholder,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label
        htmlFor={name}
        className="phone:text-sm tablet:text-md laptop:text-lg"
      >
        {label} {required && <p className="inline text-sm align-top">*</p>}
      </label>
      <div className="relative inline-block w-full bg-transparent text-on-background">
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          className={`peer bg-transparent text-on-background h-20 w-full border-b-2 pl-2 pt-2 focus:border-0 focus:outline-0 ${className}`}
        />
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 peer-focus:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 peer-focus:h-full"></span>
      </div>
    </div>
  );
}
