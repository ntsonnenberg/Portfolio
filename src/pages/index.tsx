import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import ParallaxFeature from "../components/ParallaxFeature";
import ProfileFeature from "../components/ProfileFeature";
import NewsletterForm from "../components/NewsletterForm";
import { Helmet } from "react-helmet";
import bespokeFavicon from "../images/bespoke-black-no-bg.png";
import SocialLinks from "../components/SocialLinks";

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <ProfileFeature />
        <Featured />
        <ParallaxFeature />
        <Steps />
        <SocialLinks />
        <NewsletterForm />
        <ContactForm />
      </>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <Helmet>
      <title>Bespoke Dev Solutions</title>
      <link rel="icon" type="image/png" href={bespokeFavicon}></link>
      <meta name="title" content="Bespoke Dev Solutions" />
      <meta name="theme-color" content="#141414" />
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
    </Helmet>
  );
}
