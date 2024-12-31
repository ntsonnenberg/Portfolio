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
    <div className="!scroll-smooth">
      <NavBar openDrawer={() => setShowDrawer(!showDrawer)} />
      {children}
      <NavDrawer isOpen={showDrawer} closeDrawer={() => setShowDrawer(false)} />
      <Footer />
    </div>
  );
}
