import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { Project } from "../../lib/projects";
import Image from "../../components/Image";
import FadeBlockHeader from "../../components/FadeBlockHeader";
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
            className="flex self-center -z-10"
          />
          <div className="absolute top-40 left-40 bg-background p-4 w-1/3 drop-shadow-xl rounded-md">
            <FadeBlockHeader color="on-background">
              {project.title}
            </FadeBlockHeader>
            <h3 className="mt-4 animate-fade-in-down delay-1000 phone:text-lg tablet:text-2xl">
              {project.catchPhrase}
            </h3>
            <div className="mt-10 flex flex-col">
              <h4>{project.subtitle}</h4>
              <Link
                to={project.link}
                className="outlined light mt-4 place-self-end py-1 px-2"
              >
                {project.link.includes("github.com")
                  ? "View GitHub Repo"
                  : "View Website"}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-32 flex flex-col items-center gap-16">
          <p className="mx-40 phone:text-lg tablet:text-2xl">
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
