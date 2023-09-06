import React from "react";

export default function Card(): JSX.Element {
  return (
    <div className="bg-primary w-72 h-auto p-4 rounded-md">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 mb-4">
          <img
            src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
            alt="gmail logo"
            className="w-10 h-10"
          />
          <h2>Gmail</h2>
        </div>
        <p className="text-start text-xs mb-8 mx-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>
      </div>
    </div>
  );
}
