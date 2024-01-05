import React from "react";

export default function NewsletterForm(): JSX.Element {
  return (
    <div className="flex justify-center items-center bg-background py-40">
      <iframe
        src="https://nathansonnenberg.substack.com/embed"
        width="480"
        height="350"
      ></iframe>
    </div>
  );
}
