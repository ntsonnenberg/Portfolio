import React from "react";
import classNames from "classnames";
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
  small,
  medium,
  large,
  className,
}: Props): JSX.Element {
  const labelClasses = classNames({
    "text-md": small,
    "text-xl": medium,
    "text-2xl": large,
  });

  const inputWrapperClasses = classNames(
    "relative inline-block bg-transparent phone:py-1 laptop:py-0",
    {
      "w-60 h-auto": small,
      "w-80 h-10": medium,
      "w-96 h-12": large,
    },
    className
  );

  return (
    <div className="flex flex-col items-start gap-1">
      <label className={labelClasses}>{label}</label>
      <div className={inputWrapperClasses}>
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
