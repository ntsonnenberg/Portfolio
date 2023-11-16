import * as React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import ParallaxFeature from "../components/ParallaxFeature";
import ProfileFeature from "../components/ProfileFeature";

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <ProfileFeature />
        <Featured />
        <ParallaxFeature />
        <Steps />
        <ContactForm />
      </>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <head>
      <title>Bespoke Dev Solutions</title>
      <meta name="title" content="Bespoke Dev Solutions" />
      <meta
        name="description"
        content="Build your ideas into reality with a custom web application for your business."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bespokedevsolutions.com/" />
      <meta property="og:title" content="Bespoke Dev Solutions" />
      <meta
        property="og:description"
        content="Build your ideas into reality with a custom web application for your business."
      />
      <meta property="twitter:type" content="website" />
      <meta property="twitter:url" content="https://bespokedevsolutions.com/" />
      <meta property="twitter:title" content="Bespoke Dev Solutions" />
      <meta
        property="twitter:description"
        content="Build your ideas into reality with a custom web application for your business."
      />
    </head>
  );
}
