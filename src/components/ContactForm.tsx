import React, { useState, FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import Spinner from "./Spinner";
import { db, auth } from "../api/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";

export default function ContactUs(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await signInAnonymously(auth);
      await addDoc(collection(db, "contacts"), {
        email,
        timestamp: serverTimestamp(),
      });
      setEmail("");
      setIsLoading(false);
      setMessage("Email sent! We will reach out to you shortly.");
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
      setMessage("Unable to send email.");
    }
  };

  return (
    <div className="bg-primary-variant text-on-primary flex flex-col text-center items-center py-20 gap-5">
      <h1 className="font-bold phone:text-2xl tablet:text-5xl tablet:mb-10 laptop:text-7xl laptop:mb-16">
        Contact Me to Learn More
      </h1>
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
