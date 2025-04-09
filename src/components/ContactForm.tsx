import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const botPoisonPK = process.env.BOTPOISON_PK || "";

export default function ContactForm(): JSX.Element {
  return (
    <div id="contact-form" className="flex flex-col text-center items-center">
      <p className="mb-6 phone:text-3xl tablet:text-5xl">Contact Us</p>
      <form
        method="POST"
        action="https://submit-form.com/rEezQqOiY"
        data-botpoison-public-key={botPoisonPK}
        className=" flex flex-col gap-6"
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://bespokecode.io/thanks"
        />
        <Input
          label="Full name"
          name="fullName"
          type="text"
          required
          placeholder="Enter name..."
        />
        <div className="flex gap-2">
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
        </div>
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
