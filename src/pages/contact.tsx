import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ContactForm from "../components/ContactForm";

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <div className="py-20 flex justify-evenly phone:flex-col laptop:flex-row">
        <div className="flex flex-col gap-16 justify-center basis-1/3 phone:pt-20 laptop:pt-0 phone:mx-10">
          <h1 className="text-3xl self-center phone:w-full tablet:w-1/2 laptop:w-full">
            Contact Our Web Development Team for Your Custom Project
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 basis-1/2">
              <div className="p-4 self-center ring-2 rounded-full ring-primary bg-primary/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="phone:size-6 tablet:size-12 stroke-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="self-center text-2xl">Email</p>
              <p className="self-center text-center text-sm px-2 phone:w-full tablet:w-1/2 laptop:w-full">
                Bespoke Code's team is here to assist you. Email us at
                nsonnenberg@bespokecode.io.
              </p>
            </div>
            <div className="flex flex-col gap-4 basis-1/2">
              <div className="p-4 self-center ring-2 rounded-full ring-primary bg-primary/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="phone:size-6 tablet:size-12 stroke-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <p className="self-center text-2xl">Phone</p>
              <p className="self-center text-center text-sm px-2 phone:w-full tablet:w-1/2 laptop:w-full">
                We love hearing about your ideas and business! Give us a call at
                (805) 504-5262.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Looking for a Web Developer? Contact Bespoke Code | Freelance Web Development"
      description="Need an expert web developer for your project? Contact Bespoke Code today. We specialize in custom web applications for local businesses. Get a free consultation."
      pathname="/contact"
    />
  );
}
