import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Steps from "../components/Steps";

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <Hero />
      <NavBar />
      <Featured />
      <Steps />
      <Footer />
    </div>
  );
}

export function Head(): JSX.Element {
  return <title>Nathan Sonnenberg</title>;
}
