import React from "react";
import Button from "./Button";

export default function Hero(): JSX.Element {
  return (
    <div className="h-screen bg-primary-variant/80 text-on-primary flex flex-row phone:flex-col tablet:flex-col laptop:flex-row">
      <div className="basis-3/5">Image</div>
      <div className="basis-2/5 flex flex-col my-20 mx-10 phone:mx-6 tablet:mx-10 gap-10">
        <h1 className="text-6xl phone:text-5xl font-bold">
          Professional Web Development Services
        </h1>
        <h2 className="text-2xl">
          Build your ideas into reality and take your startup to the next level.
        </h2>
        <div className="flex flex-row gap-5">
          <Button secondary filled large className="px-2 py-1">
            Book Demo
          </Button>
          <Button light outline large className="px-2 py-1">
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
