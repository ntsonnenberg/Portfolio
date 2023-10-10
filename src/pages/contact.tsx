import React, { useState, useEffect } from "react";
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

  const inputSize =
    window.innerWidth >= 1536
      ? "large"
      : window.innerWidth < 1536 && window.innerWidth >= 664
      ? "medium"
      : window.innerWidth < 664
      ? "small"
      : "large";

  const updateMessageInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormInputs((prev) => ({ ...prev, message: event.target.value }));
  };

  return (
    <Layout>
      <div className="py-60 bg-background text-on-background min-h-screen flex flex-col items-center gap-20">
        <h1 className="text-center font-bold text-6xl">Book a Demo</h1>
        <form className="flex flex-col phone:gap-10 tablet:gap-8">
          <div className="flex phone:flex-col phone:gap-10 tablet:flex-row tablet:gap-2">
            <Input
              label="First Name"
              placeholder="Enter first name..."
              type="text"
              {...{ [inputSize]: true }}
            />
            <Input
              label="Last Name"
              placeholder="Enter last name..."
              type="text"
              {...{ [inputSize]: true }}
            />
          </div>
          <Input
            label="Email"
            placeholder="Enter email..."
            type="text"
            {...{ [inputSize]: true }}
            className="w-full"
          />
          <Input
            label="Title"
            placeholder="Enter position at company..."
            type="text"
            {...{ [inputSize]: true }}
            className="w-full"
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
