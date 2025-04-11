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
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full p-2 decoration-none bg-[#050A30] rounded-md focus:ring-1 focus:ring-primary focus:outline-0"
      />
    </div>
  );
}
