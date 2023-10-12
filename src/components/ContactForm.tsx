import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function ContactUs(): JSX.Element {
  const isLaptop = window.innerWidth >= 1536;
  const isTablet = window.innerWidth < 1536 && window.innerWidth >= 664;
  const isPhone = window.innerWidth < 664;

  const sendEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="bg-primary-variant text-on-primary flex flex-col text-center items-center py-20 gap-5">
      <h1 className="font-bold phone:text-2xl tablet:text-5xl tablet:mb-10 laptop:text-7xl laptop:mb-16">
        Contact Us to Learn More
      </h1>
      <form>
        <Input
          label="Email"
          type="text"
          placeholder="Enter email..."
          small={isPhone}
          medium={isTablet}
          large={isLaptop}
        />
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
