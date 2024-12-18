import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import ProfileFeature from "../components/ProfileFeature";
import NewsletterForm from "../components/NewsletterForm";
import { Helmet } from "react-helmet";
import bespokeFavicon from "../images/bespoke-black-no-bg.png";
import Marquee from "react-fast-marquee";
import IntegrationFeatures from "../components/IntegrationFeatures";
import CodeExample from "../components/CodeExample";
import FractalDotGrid from "../components/FractalDotGrid";
import ParticleRing from "../components/ParticleRing";
import FadeBlockHeader from "../components/FadeBlockHeader";
import { AuroraBackgroundView } from "../components/AuroraBackgroundView";
import { MacbookScrollView } from "../components/MacbookScrollView";
import { IconCloudView } from "../components/IconCloudView";
import { ReactLenis } from "lenis/dist/lenis-react";
import { GlobeView } from "../components/Globe";
import { BackgroundBoxesView } from "../components/BackgroundBoxesView";
import { BackgroundBeamsView } from "../components/BackgroundBeamsView";
import { FlipWordsView } from "../components/FlipWordsView";
import { TextHoverEffectView } from "../components/TextHoverEffectView";
import { GeminiEffectView } from "../components/GeminiEffectView";
import { HeroParallaxView } from "../components/HeroParallaxView";
import { HackerBackgroundView } from "../components/HackerBackgroundView";

export default function IndexPage(): JSX.Element {
  let isPhone = false;
  if (typeof window !== "undefined") {
    isPhone = window.innerWidth <= 412;
  }

  return (
    <Layout>
      <ReactLenis root>
        <HeroParallaxView />
        <TextHoverEffectView />
        <ProfileFeature />
        <div className="phone:pt-10 laptop:pt-0">
          <AuroraBackgroundView />
        </div>
        <GeminiEffectView />
        <MacbookScrollView />
        <BackgroundBoxesView />
        <Featured />
        <BackgroundBeamsView />
        <IntegrationFeatures />
        <ParticleRing />
        <div className="flex phone:gap-0 laptop:gap-10 laptop:m-10 laptop:p-40 laptop:flex-row phone:flex-col justify-evenly">
          {isPhone ? (
            <FadeBlockHeader color="on-background" className="py-32 mx-6">
              Built with modern frameworks
            </FadeBlockHeader>
          ) : (
            <FlipWordsView />
          )}
          <IconCloudView />
        </div>
        <SocialLinks />
        <div className="relative h-screen bg-surface">
          <FractalDotGrid />
        </div>
        <Steps />
        <Marquee
          direction="right"
          speed={100}
          gradient
          gradientColor="#141414"
          className="py-4 overflow-clip"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/client-logos%2Fenlite-logo.svg?alt=media&token=43f81f71-67e2-4a34-8ae4-8b05991e6120"
            className="phone:w-40 phone:h-10 phone:mx-6 tablet:w-52 tablet:h-16 tablet:mx-10 laptop:w-60 laptop:h-20 laptop:mx-14"
            alt="Enlite Logo"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/client-logos%2Futah-automotive-logo.svg?alt=media&token=d1500c1c-5c17-4804-aa09-d92d8f83d0ac"
            className="phone:w-24 phone:h-24 phone:mx-6 tablet:mx-10 tablet:w-28 tablet:h-28 laptop:mx-14"
            alt="UTA Logo"
          />
        </Marquee>
        <NewsletterForm />
        <ContactForm />
      </ReactLenis>
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
