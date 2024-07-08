import React from "react";

export default function NewsletterForm(): JSX.Element {
  return (
    <div className="flex justify-center items-center py-40">
      <iframe
        src="https://nathansonnenberg.substack.com/embed"
        width="400"
        height="400"
        className="shadow-stand-out rounded-lg"
      ></iframe>
    </div>
  );
}
