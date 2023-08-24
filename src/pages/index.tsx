import * as React from "react";
import NavBar from "../components/NavBar";
// import type { HeadFC, PageProps } from "gatsby";

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <NavBar />
      <div> Index Page</div>
    </div>
  );
}

export function Head(): JSX.Element {
  return <title>Nathan Sonnenberg</title>;
}
