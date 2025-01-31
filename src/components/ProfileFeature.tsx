import React, { useRef } from "react";
import { Link } from "gatsby";
import Image from "./Image";
import useScrollObserver from "../hooks/use-scroll-observer";

export default function ProfileFeature(): JSX.Element {
  const textRef = useRef(null);

  useScrollObserver(textRef, {
    animationClass: "animate-fade-in-down",
    handleOpacity: true,
  });

  return (
    <div className="flex justify-between phone:flex-col phone:gap-20 phone:mt-20 tablet:gap-0 tablet:flex-row tablet:min-h-screen tablet:items-center laptop:m-20 desktop:mx-72">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Fprofile.jpeg?alt=media&token=5e6061c3-fcbf-4895-bf13-f9e53dc5e1a5"
        alt="Profile Headshot Photo"
        className="rounded-sm h-auto w-80 shadow-stand-out phone:place-self-center tablet:ml-10 tablet:place-self-center laptop:ml-0"
      />
      <div
        ref={textRef}
        className="flex flex-col items-start gap-6 phone:mx-6 phone:w-1/2 tablet:mx-12"
      >
        <p className="font-bold text-3xl phone:w-full laptop:w-5/6">
          Nathan Sonnenberg
          <br />
          Professional Freelance Developer
        </p>
        <p className="text-lg phone:w-full laptop:w-1/2">
          I create{" "}
          <span className="text-secondary font-bold">
            website applications that provide a dynamic{" "}
          </span>
          user experience and seamless interaction. Partner with a leading
          website development company that prioritizes innovation, performance,
          and customer satisfaction.
        </p>
        <Link
          to="/aboutme"
          className="font-bold outline outline-2 outline-secondary-variant rounded-md bg-secondary-variant text-on-secondary hover:bg-secondary hover:outline-secondary px-2 py-1 self-center mt-6"
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
