import React, { useState, FormEvent } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { db } from "../api/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Spinner from "../components/Spinner";

export default function ContactPage(): JSX.Element {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const sendContact = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await addDoc(collection(db, "contacts"), {
        ...formInputs,
        timestamp: serverTimestamp(),
      });
      clearFormInputs();
      setMessage("Message sent! We will reach out to you shortly.");
    } catch (error) {
      console.error("Error sending contact:", error);
      setMessage("Unable to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearFormInputs = () =>
    setFormInputs({
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      message: "",
    });

  const updateFormInputs = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: string
  ): void => {
    setFormInputs((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  return (
    <Layout>
      <div className="py-60 bg-background text-on-background min-h-screen flex flex-col items-center gap-20">
        <h1 className="text-center font-bold text-6xl">Book a Demo</h1>
        <form
          onSubmit={sendContact}
          className="flex flex-col phone:gap-10 tablet:gap-8 laptop:w-1/3"
        >
          <div className="flex phone:flex-col phone:gap-10 tablet:flex-row tablet:justify-between">
            <Input
              label="First Name"
              value={formInputs.firstName}
              onChange={(event) => updateFormInputs(event, "firstName")}
              placeholder="Enter first name..."
              type="text"
            />
            <Input
              label="Last Name"
              value={formInputs.lastName}
              onChange={(event) => updateFormInputs(event, "lastName")}
              placeholder="Enter last name..."
              type="text"
            />
          </div>
          <Input
            label="Email"
            value={formInputs.email}
            onChange={(event) => updateFormInputs(event, "email")}
            placeholder="Enter email..."
            type="text"
          />
          <Input
            label="Title"
            onChange={(event) => updateFormInputs(event, "title")}
            value={formInputs.title}
            placeholder="Enter position at company..."
            type="text"
          />
          <Textarea
            label="Message"
            value={formInputs.message}
            onChange={(event) => updateFormInputs(event, "message")}
            placeholder="Enter message here..."
          />
          <Button
            light
            filled
            long
            className="flex flex-row justify-center gap-3 py-1 mt-10"
          >
            {isLoading && (
              <Spinner size={6} color="primary" className="mt-0.5" />
            )}
            Submit
          </Button>
          <div
            className={`mt-4 text-secondary ${
              message.includes("Unable") ? "text-error" : ""
            }`}
          >
            {message}
          </div>
        </form>
      </div>
    </Layout>
  );
}
