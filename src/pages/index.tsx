import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <Hero />
      <NavBar />
      <Featured />
      <Steps />
      <ContactForm />
      <Footer />
    </div>
  );
}

export function Head(): JSX.Element {
  return <title>Nathan Sonnenberg</title>;
}
