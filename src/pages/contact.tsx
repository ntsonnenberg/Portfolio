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
        <form className="flex flex-col gap-8">
          <div className="flex flex-row gap-2">
            <Input label="First Name" type="text" large />
            <Input label="Last Name" type="text" large />
          </div>
          <Input label="Email" type="text" large className="w-full" />
          <Input label="Title" type="text" large className="w-full" />
          <Textarea
            label="Message"
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
