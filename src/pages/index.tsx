import * as React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import OverlayFeature from "../components/OverlayFeature";

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <Featured />
        <OverlayFeature />
        <Steps />
        <ContactForm />
      </>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return <title>Nathan Sonnenberg</title>;
}
