import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./Button";
import { Link } from "gatsby";

export default function ProfileFeature(): JSX.Element {
  return (
    <div className="flex justify-between phone:flex-col phone:gap-20 phone:mt-20 tablet:gap-0 tablet:flex-row tablet:min-h-screen tablet:items-center laptop:m-20 desktop:mx-72">
      <StaticImage
        src="../images/profile.jpg"
        alt="profile"
        placeholder="blurred"
        className="rounded-md h-auto w-60 shadow-stand-out phone:place-self-center tablet:ml-10 tablet:place-self-center laptop:ml-0"
      />
      <div className="flex flex-col items-start gap-6 phone:mx-6 phone:w-auto tablet:mx-12">
        <h2 className="font-bold text-3xl phone:w-full laptop:w-5/6">
          I'm Nathan Sonnenberg, a professional freelance web developer.
        </h2>
        <p className="text-lg phone:w-full laptop:w-1/2">
          I help{" "}
          <span className="text-secondary-variant font-bold">
            businesses from all sizes to build technologies
          </span>
          , allowing them to accomplish there goals.
        </p>
        <Button filled secondary large className="px-2 py-1 self-center mt-6">
          <Link to="/aboutme">About Me</Link>
        </Button>
      </div>
    </div>
  );
}
