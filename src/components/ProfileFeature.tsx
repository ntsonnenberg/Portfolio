import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./Button";
import { Link } from "gatsby";

export default function ProfileFeature(): JSX.Element {
  return (
    <div className="flex justify-between phone:flex-col phone:gap-20 phone:mt-20 tablet:gap-0 tablet:flex-row tablet:min-h-screen tablet:items-center laptop:m-20">
      <StaticImage
        src="../images/profile.jpg"
        alt="profile"
        placeholder="blurred"
        className="rounded-md h-auto w-60 phone:place-self-center tablet:ml-10 tablet:place-self-center laptop:ml-0"
      />
      <div className="w-1/2 flex flex-col items-start gap-6 phone:mx-6 phone:w-auto tablet:mx-12">
        <h1 className="font-bold text-5xl">
          Welcome <span>&#128075;</span>
        </h1>
        <h2 className="font-bold text-2xl">
          I'm Nathan Sonnenberg, a professional freelance web developer.
        </h2>
        <p>
          I help{" "}
          <span className="text-secondary-variant font-bold">
            businesses from all sizes to build technologies
          </span>
          , allowing them to accomplish there goals.
        </p>
        <div className="flex flex-col phone:items-center tablet:items-end">
          <p className="mb-4">Learn more about my experience here! </p>
          <Button filled secondary large className="px-2 py-1">
            <Link to="/aboutme">About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
