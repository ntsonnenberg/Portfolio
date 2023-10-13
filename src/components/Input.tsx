import React from "react";
interface Props {
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export default function Input({
  label,
  type,
  placeholder,
  className,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label className="phone:text-md tablet:text-xl laptop:text-2xl">
        {label}
      </label>
      <div
        className={`relative inline-block bg-transparent w-full phone:py-1 phone:h-10 tablet:h-12 laptop:py-0 laptop:h-14 ${className}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          className="peer w-full h-full decoration-none bg-transparent border-b-4 pl-2 focus:border-0 focus:outline-0"
        />
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 peer-focus:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 peer-focus:h-full"></span>
      </div>
    </div>
  );
}
