import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
