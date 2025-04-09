import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function Thanks(): JSX.Element {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="pt-40 flex flex-col items-center gap-4">
          <h1 className="font-bold phone:text-xl tablet:text-3xl laptop:text-5xl">
            We've recieved Your Message!
          </h1>
          <h2 className="phone:text-sm tablet:text-lg taptop:text-2xl">
            We will reach out to soon to hear more about your project.
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Thank You for Submitting Your Project"
      description="We will reach out to your shortly to hear more about your project. We are excited to work with you!"
      pathname="/thanks"
    />
  );
}
