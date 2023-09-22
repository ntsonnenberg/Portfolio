import * as React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <Hero />
      <Layout>
        <>
          <Featured />
          <Steps />
          <ContactForm />
        </>
      </Layout>
    </div>
  );
}

export function Head(): JSX.Element {
  return <title>Nathan Sonnenberg</title>;
}
