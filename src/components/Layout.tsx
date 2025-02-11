import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import useScrollFromTop from "../hooks/use-scroll-from-top";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props): JSX.Element {
  const [showDrawer, setShowDrawer] = useState(false);
  const { isStyleOn } = useScrollFromTop();

  return (
    <div
      className={`!scroll-smooth transition-all ${
        isStyleOn ? "" : "shadow-custom-inner"
      }`}
    >
      <NavBar openDrawer={() => setShowDrawer(!showDrawer)} />
      {children}
      <NavDrawer isOpen={showDrawer} closeDrawer={() => setShowDrawer(false)} />
      <Footer />
    </div>
  );
}
