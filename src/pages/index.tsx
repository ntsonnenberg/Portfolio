import React from "react";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import ProfileFeature from "../components/ProfileFeature";
import Marquee from "react-fast-marquee";
import IntegrationFeatures from "../components/IntegrationFeatures";
import { ReactLenis } from "lenis/dist/lenis-react";
import BackgroundBeamsView from "../components/BackgroundBeamsView";
import GeminiEffectView from "../components/GeminiEffectView";
import Image from "../components/Image";
import SEO from "../components/Seo";
import HeroMobileView from "../components/HeroMobileView";
import { getServices } from "../lib/sanity/services";
import FadeBlockHeader from "../components/FadeBlockHeader";
import ServiceOffering from "../components/home/ServiceOffering";

export default function IndexPage(): JSX.Element {
  const services = getServices();

  return (
    <Layout>
      <ReactLenis root>
        <HeroMobileView />
        <ProfileFeature />
        <Marquee
          direction="right"
          speed={100}
          gradient
          gradientColor="#141414"
          className="py-4 overflow-clip my-40"
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
        <section className="phone:pt-10 tablet:py-20">
          <FadeBlockHeader
            color="on-background"
            className="flex justify-center"
          >
            Here's Our Offer
          </FadeBlockHeader>
          {services.map((service, index) => (
            <ServiceOffering key={service.id} service={service} index={index} />
          ))}
        </section>
        <GeminiEffectView />
        <Featured />
        <BackgroundBeamsView />
        <IntegrationFeatures />
        <SocialLinks />
        <Steps />
        <div className="phone:mx-10 tablet:mx-0">
          <ContactForm />
        </div>
      </ReactLenis>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Bespoke Code | Freelance Web Development in Utah | Find Custom Software Solutions"
      description="Expert web & mobile developers for your local business. Get custom, affordable software solutions that drive results. Free consultation—request a quote today!"
      pathname="/"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap&text=WebDvlopmntSuisfrUahB"
        rel="stylesheet"
      />
      <script type="application/ld+json">
        {JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Bespoke Code",
            image:
              "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.png?alt=media&token=1f6923f7-c1ba-4ab8-89af-8705c5d507b4",
            "@id":
              "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.png?alt=media&token=1f6923f7-c1ba-4ab8-89af-8705c5d507b4",
            url: "https://bespokecode.io/",
            telephone: "8055045262",
            address: {
              "@type": "PostalAddress",
              streetAddress: "339 N 1320 E",
              addressLocality: "Lehi",
              addressRegion: "UT",
              postalCode: "84043",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.facebook.com/nathan.sonnenberg.14",
              "https://x.com/nate_sonnenberg",
              "https://www.instagram.com/napote.sonny/",
              "https://www.linkedin.com/in/nathan-sonnenberg/",
              "https://github.com/ntsonnenberg",
            ],
          },
          null,
          2
        )}
      </script>
    </SEO>
  );
}
