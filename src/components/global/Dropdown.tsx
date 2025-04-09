"use client";

import { useState } from "react";
import React from "react";

interface Props {
  label: string;
  options: { id: string; label: string }[];
  setOption: (id: string) => void;
}

export default function Dropdown({ label, options, setOption }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (optionId: string) => {
    setOption(optionId);
    setSelectedOption(optionId);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-bold">{label}</label>
      <div className="mt-2">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer block w-full py-3 px-4 border-gray-700 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start space-x-2">
              {selectedOption ? (
                options.find((option) => option.id === selectedOption)?.label
              ) : (
                <span>Select a {label}</span>
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute -bottom-[10.5em] w-full bg-background z-10">
          <div className="border-gray-700 shadow border rounded-lg w-full block text-sm px-4 py-2 space-y-2">
            <ul className="flex flex-col">
              <li
                key=""
                className="w-full rounded-md p-2 hover:bg-gray-500 cursor-pointer"
                onClick={() => handleOptionClick("")}
              >
                All {label}
              </li>
              {options.map((option) => (
                <li
                  key={option.id}
                  className={`w-full rounded-md p-2 hover:bg-gray-500 cursor-pointer ${
                    selectedOption === option.id && "bg-primary-variant"
                  }`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
