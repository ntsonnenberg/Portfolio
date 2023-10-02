import classNames from "classnames";
import React from "react";

type Props = {
  label: string;
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea({
  className,
  label,
  value,
  onChange,
}: Props): JSX.Element {
  const textareaWrapperClasses = classNames(
    "relative bg-transparent text-on-background h-60",
    {}
  );

  return (
    <div>
      <label className="text-2xl">{label}</label>
      <div className={textareaWrapperClasses}>
        <textarea
          value={value}
          onChange={onChange}
          className={`peer bg-transparent text-on-background h-60 w-full border-b-4 pl-2 pt-2 focus:border-0 focus:outline-0 ${className}`}
        />
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 peer-focus:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 peer-focus:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 peer-focus:h-full"></span>
      </div>
    </div>
  );
}
