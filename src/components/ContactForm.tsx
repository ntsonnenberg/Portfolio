import React, { useState, FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import Spinner from "./Spinner";
import { db } from "../api/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Header from "./Header";

export default function ContactUs(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await addDoc(collection(db, "contacts"), {
        email,
        timestamp: serverTimestamp(),
      });
      setEmail("");
      setMessage("Email sent! We will reach out to you shortly.");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Unable to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary-variant text-on-primary flex flex-col text-center items-center py-20 gap-5">
      <div className="phone:mx-6 phone:mb-10 laptop:mb-16">
        <Header color="on-background">Contact Me to Learn More</Header>
      </div>
      <form
        onSubmit={sendEmail}
        className="phone:w-2/3 tablet:w-1/3 laptop:w-1/4"
      >
        <Input
          label="Email"
          value={email}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            setEmail(event?.currentTarget.value)
          }
          type="text"
          placeholder="Enter email..."
        />
        <Button
          light
          filled
          className="w-full rounded-sm flex flex-row justify-center gap-3 py-1 text-xl phone:mt-5 phone:h-auto tablet:mt-8 laptop:h-10"
        >
          {isLoading && <Spinner size={6} color="primary" />}
          Submit
        </Button>
        <div
          className={`mt-4 ${
            message.includes("Unable") ? "text-error" : "text-secondary"
          }`}
        >
          {message}
        </div>
      </form>
    </div>
  );
}
