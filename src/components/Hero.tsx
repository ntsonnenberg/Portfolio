import React from "react";
import Button from "./Button";

export default function Hero(): JSX.Element {
  return (
    <div className="phone:h-[150vh] tablet:h-screen bg-primary-variant/80 text-on-primary flex flex-row phone:flex-col tablet:flex-col laptop:flex-row">
      <div className="basis-3/5 relative">
        <img
          src="/landing-content.svg"
          className="w-auto h-60 absolute z-20 animate-fade-in-down mt-32 phone:top-12 tablet:top-0"
        />
        <img
          src="/hero.svg"
          className="w-auto h-96 z-10 absolute mt-44 animate-fade-in-down"
        />
        <img
          src="/yearly-metrics.svg"
          className="w-auto h-52 z-0 absolute ml-40 animate-fade-in-down phone:bottom-32 phone:right-10 tablet:bottom-0 tablet:left-2 laptop:bottom-12 desktop:bottom-60"
        />
        <img
          src="/products.svg"
          className="absolute z-20 mb-6 mr-4 animate-fade-in-down phone:h-52 phone:w-auto phone:bottom-4 phone:right-0 tablet:w-auto tablet:h-72 tablet:bottom-10 tablet:right-14 laptop:bottom-20 laptop:right-36 desktop:bottom-72 desktop:right-80"
        />
        <img
          src="/cart.svg"
          className="w-auto h-52 absolute z-20 animate-fade-in-down phone:bottom-10 tablet:bottom-16 desktop:bottom-60"
        />
        <img
          src="/ecommerce-landing.svg"
          className="w-auto h-64 absolute z-30 top-20 animate-fade-in-down phone:right-20 tablet:right-36 laptop:right-56 desktop:right-96"
        />
      </div>
      <div className="basis-2/5 flex flex-col my-20 mx-10 gap-10 phone:mx-6 tablet:mx-10">
        <h1 className="text-6xl font-bold phone:text-5xl">
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
