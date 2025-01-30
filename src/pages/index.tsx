import React from "react";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import ProfileFeature from "../components/ProfileFeature";
import Marquee from "react-fast-marquee";
import IntegrationFeatures from "../components/IntegrationFeatures";
import FadeBlockHeader from "../components/FadeBlockHeader";
import { AuroraBackgroundView } from "../components/AuroraBackgroundView";
import { MacbookScrollView } from "../components/MacbookScrollView";
import { IconCloudView } from "../components/IconCloudView";
import { ReactLenis } from "lenis/dist/lenis-react";
import { BackgroundBoxesView } from "../components/BackgroundBoxesView";
import { BackgroundBeamsView } from "../components/BackgroundBeamsView";
import { FlipWordsView } from "../components/FlipWordsView";
import { TextHoverEffectView } from "../components/TextHoverEffectView";
import { GeminiEffectView } from "../components/GeminiEffectView";
import { HeroParallaxView } from "../components/HeroParallaxView";
import Image from "../components/Image";

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
        <Marquee
          direction="right"
          speed={100}
          gradient
          gradientColor="#141414"
          className="py-4 overflow-clip mb-40"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/client-logos%2Fenlite-logo.png?alt=media&token=1b09af9f-7b72-4b26-9040-295881096739"
            className="phone:w-40 phone:h-10 phone:mx-6 tablet:w-52 tablet:h-16 tablet:mx-10 laptop:w-60 laptop:h-20 laptop:mx-14"
            alt="Enlite Home Logo"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/client-logos%2Futah-automotive-logo.png?alt=media&token=aca2c999-402a-424e-8c5d-966f5ae03375"
            className="phone:w-24 phone:h-24 phone:mx-6 tablet:mx-10 tablet:w-28 tablet:h-28 laptop:mx-14"
            alt="Utah Automotive Magazine Website Logo"
          />
        </Marquee>
        <div className="phone:pt-10 laptop:pt-0">
          <AuroraBackgroundView />
        </div>
        <GeminiEffectView />
        <MacbookScrollView />
        <BackgroundBoxesView />
        <Featured />
        <BackgroundBeamsView />
        <IntegrationFeatures />
        <SocialLinks />
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
        <Steps />
        <ContactForm />
      </ReactLenis>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <>
      <title>Bespoke Dev Solutions - Nathan Sonnenberg</title>
      <link
        rel="icon"
        type="image/png"
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-black-no-bg.png?alt=media&token=9e7fc2c7-5466-4830-88e7-d5466d2b1118"
      ></link>
      <meta
        name="title"
        content="Professional Application Development Services"
      />
      <meta
        name="description"
        content="Hire our experienced freelance web developers for customized solutions that fit you busines requirements."
      />
      <meta name="theme-color" content="#141414" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bespokedevsolutions.com/" />
      <meta
        property="og:title"
        content="Professional Application Development Services"
      />
      <meta
        property="og:description"
        content="Hire our experienced freelance web developers for customized solutions that fit you busines requirements."
      />
      <meta property="twitter:type" content="website" />
      <meta property="twitter:url" content="https://bespokedevsolutions.com/" />
      <meta
        property="twitter:title"
        content="Professional Application Development Services"
      />
      <meta
        property="twitter:description"
        content="Hire our experienced freelance web developers for customized solutions that fit you busines requirements."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
