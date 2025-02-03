import React from "react";
import Layout from "../components/Layout";

export default function Thanks(): JSX.Element {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-40 flex flex-col items-center gap-4">
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
