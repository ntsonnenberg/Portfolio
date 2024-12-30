import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import NavDrawer from "./NavDrawer";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props): JSX.Element {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <html lang="en" />
      <Head />
      <body>
        <div className="!scroll-smooth">
          <NavBar openDrawer={() => setShowDrawer(!showDrawer)} />
          {children}
          <NavDrawer
            isOpen={showDrawer}
            closeDrawer={() => setShowDrawer(false)}
          />
          <Footer />
        </div>
      </body>
    </>
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
