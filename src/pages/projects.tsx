import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout>
      <div className="py-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        <ProjectCard
          image="/dashboard-page.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
        <ProjectCard
          image="/ecommerce-front-products.svg"
          title="Ecommerce Website"
          link="https://ecommerce-front-9975il0qq-ntsonnenberg.vercel.app/"
        />
        <ProjectCard
          image="/ecommerce-admin-categories.svg"
          title="Ecommerce Admin"
          link="https://ecommerce-admin-taupe.vercel.app/"
        />
        <ProjectCard
          image="/utah-automotive-landing.svg"
          title="Utah Automotive"
          link="https://utah-automotive.com/"
        />
      </div>
    </Layout>
  );
}
