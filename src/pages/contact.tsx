import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";

export default function ContactPage(): JSX.Element {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    message: "",
  });

  const updateMessageInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormInputs((prev) => ({ ...prev, message: event.target.value }));
  };

  return (
    <Layout>
      <div className="py-60 bg-background text-on-background min-h-screen flex flex-col items-center gap-20">
        <h1 className="text-center font-bold text-6xl">Book a Demo</h1>
        <form className="flex flex-col phone:gap-10 tablet:gap-8 laptop:w-1/3">
          <div className="flex phone:flex-col phone:gap-10 tablet:flex-row tablet:justify-between">
            <Input
              label="First Name"
              placeholder="Enter first name..."
              type="text"
            />
            <Input
              label="Last Name"
              placeholder="Enter last name..."
              type="text"
            />
          </div>
          <Input label="Email" placeholder="Enter email..." type="text" />
          <Input
            label="Title"
            placeholder="Enter position at company..."
            type="text"
          />
          <Textarea
            label="Message"
            placeholder="Enter message here..."
            value={formInputs.message}
            onChange={updateMessageInput}
          />
          <Button light filled long className="mt-10">
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
}
