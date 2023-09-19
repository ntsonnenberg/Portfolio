import React from "react";

interface Props {
  label: string;
  placeholder?: string;
}

export default function Input({ label, placeholder }: Props): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-1">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-b-2"
      />
    </div>
  );
}
