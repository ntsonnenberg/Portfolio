import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";
import NavDrawer from "./NavDrawer";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props): JSX.Element {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Nathan Sonnenberg</title>
        <meta
          name="description"
          content="Portfolio site for Nathan Sonnenberg"
        />
        <meta name="theme-color" content="bg-primary-variant/80" />
      </Helmet>
      <NavBar openDrawer={() => setShowDrawer(true)} />
      {children}
      {showDrawer && <NavDrawer closeDrawer={() => setShowDrawer(false)} />}
      <Footer />
    </div>
  );
}
