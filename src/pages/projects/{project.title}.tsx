import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { Project } from "../../lib/projects";
import Image from "../../components/Image";
import FadeBlockHeader from "../../components/FadeBlockHeader";
import SEO from "../../components/Seo";
interface Props {
  data: {
    project: Project;
  };
  children?: React.ReactNode;
}

export default function ProjectPage({ data: { project }, children }: Props) {
  return (
    <Layout>
      <>
        <div className="relative">
          <Image
            src={project.heroImage || project.images[0]}
            alt={`${project.title}-hero-image`}
            className="flex self-center phone:h-screen tablet:h-auto -z-10"
          />
          <Link
            to="/projects"
            className="absolute phone:top-24 phone:left-20 tablet:top-28 tablet:left-40 bg-background py-1 px-2 text-lg rounded-sm flex gap-2 items-center transition-all ease-in-out hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back to Projects
          </Link>
          <div className="absolute phone:top-36 phone:left-20 tablet:top-40 tablet:left-40 bg-background p-4 phone:w-9/12 tablet:w-1/3 drop-shadow-xl rounded-md">
            <h1>
              <FadeBlockHeader color="on-background">
                {project.title}
              </FadeBlockHeader>
              <p className="mt-4 animate-fade-in-down delay-1000 phone:text-lg tablet:text-2xl">
                {project.catchPhrase}
              </p>
            </h1>
            <div className="mt-10 flex flex-col gap-4">
              <h4 className="phone:text-sm laptop:text-lg">
                {project.subtitle}
              </h4>
              {project?.link && (
                <Link
                  to={project.link}
                  className="outlined light mt-4 place-self-end py-1 px-2"
                >
                  {project.link.includes("github.com")
                    ? "View GitHub Repo"
                    : "View Website"}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="phone:mt-60 tablet:mt-32 flex flex-col items-center gap-16">
          <p className="phone:mx-4 tablet:mx-20 laptop:mx-40 phone:text-lg tablet:text-2xl">
            {project.description}
          </p>
          <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
            {project.images?.map((image, index) => {
              return (
                <Image
                  src={image}
                  key={image}
                  alt={`${project.title}-image-${index}`}
                  className="object-none object-left-top h-auto w-80 transition-all ease-in-out rounded-sm drop-shadow-lg shadow-stand-out hover:scale-105 hover:drop-shadow-xl"
                />
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
}

export function Head({ data: { project } }: Props): JSX.Element {
  return (
    <SEO
      title={`${project.title} | ${project.catchPhrase} | Bespoke Code Project`}
      description={project.description}
      pathname={`/projects/${project.id}`}
      image={project.heroImage}
    >
      <script type="application/ld+json">
        {JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Project",
            name: project.title,
            url: project?.link || "",
            sameAs: project?.link?.includes("github.com") ? project.link : "",
          },
          null,
          2
        )}
      </script>
    </SEO>
  );
}

export const query = graphql`
  query ($id: String) {
    project(id: { eq: $id }) {
      id
      title
      link
      image
      heroImage
      images
      catchPhrase
      subtitle
      description
    }
  }
`;
