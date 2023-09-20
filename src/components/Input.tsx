import React from "react";
import classNames from "classnames";
interface Props {
  label: string;
  placeholder?: string;
  className?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export default function Input({
  label,
  placeholder,
  small,
  medium,
  large,
  className,
}: Props): JSX.Element {
  const labelClasses = classNames({
    "text-md": small,
    "text-xl": medium,
    "text-3xl": large,
  });

  const inputClasses = classNames(
    "bg-transparent border-b-2 focus:outline-0 focus:border-2 focus:rounded-sm",
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
      <input type="text" placeholder={placeholder} className={inputClasses} />
    </div>
  );
}
