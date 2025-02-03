import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const botPoisonPK = process.env.BOTPOISON_PK || "";

export default function ContactForm(): JSX.Element {
  return (
    <div
      id="contact-form"
      className="pt-40 flex flex-col text-center items-center"
    >
      <p className="text-on-background font-bold mb-6 phone:text-3xl tablet:text-5xl">
        Contact Us
      </p>
      <form
        method="POST"
        action="https://submit-form.com/rEezQqOiY"
        data-botpoison-public-key={botPoisonPK}
        className="phone:w-2/3 tablet:w-1/3 laptop:w-1/4 flex flex-col gap-6"
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://bespokedevsolutions.com/thanks"
        />
        <Input
          label="Full name"
          name="fullName"
          type="text"
          required
          placeholder="Enter name..."
        />
        <Input
          label="Email"
          name="email"
          type="text"
          required
          placeholder="Enter email..."
        />
        <Input
          label="Phone number"
          name="phone"
          type="number"
          placeholder="Enter phone number..."
        />
        <Textarea
          label="Message"
          name="message"
          required
          placeholder="Describe your project to us..."
        />
        <button
          type="submit"
          className="light filled w-full flex flex-row justify-center gap-3 py-1 text-xl phone:mt-5 phone:h-auto tablet:mt-8 laptop:h-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
