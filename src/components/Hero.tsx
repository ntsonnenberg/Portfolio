import React from "react";
import Button from "./Button";

export default function Hero(): JSX.Element {
  return (
    <div className="h-screen bg-primary-variant/80 text-on-primary flex flex-row phone:flex-col tablet:flex-col laptop:flex-row">
      <div className="basis-3/5 relative">
        <img
          src="/landing-content.svg"
          className="w-auto h-60 absolute z-20 mt-32"
        />
        <img src="/hero.svg" className="w-auto h-96 z-10 absolute mt-44" />
        <img
          src="/yearly-metrics.svg"
          className="w-auto h-52 z-0 absolute bottom-12 ml-40"
        />
        <img
          src="/products.svg"
          className="w-auto h-72 absolute z-20 bottom-20 mb-6 right-36 mr-4"
        />
        <img src="/cart.svg" className="w-auto h-52 absolute z-20 bottom-16" />
        <img
          src="/ecommerce-landing.svg"
          className="w-auto h-64 absolute z-30 right-56 top-20"
        />
      </div>
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
