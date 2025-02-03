import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ContactForm from "../components/ContactForm";

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <div className="pt-40 pb-20 min-h-screen">
        <ContactForm />
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Contact Us to Learn About Our Services"
      description="Reach out to our web development agency understand your business needs and start building tailored applications."
      pathname="/contact"
    />
  );
}
