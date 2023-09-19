import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function ContactUs(): JSX.Element {
  return (
    <div className="bg-primary-variant text-on-primary flex flex-col text-center items-center py-10 gap-5">
      <h1 className="font-bold phone:text-2xl">Contact Us to Learn More</h1>
      <form>
        <Input label="Email" placeholder="Enter email..." />
        <Button light filled className="mt-5 w-full rounded-sm">
          Submit
        </Button>
      </form>
    </div>
  );
}
