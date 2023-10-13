import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function ContactUs(): JSX.Element {
  return (
    <div className="bg-primary-variant text-on-primary flex flex-col text-center items-center py-20 gap-5">
      <h1 className="font-bold phone:text-2xl tablet:text-5xl tablet:mb-10 laptop:text-7xl laptop:mb-16">
        Contact Us to Learn More
      </h1>
      <form className="phone:w-2/3 tablet:w-1/3 laptop:w-1/4">
        <Input label="Email" type="text" placeholder="Enter email..." />
        <Button
          light
          filled
          className="w-full rounded-sm phone:mt-5 phone:h-auto tablet:mt-8 laptop:h-10"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
