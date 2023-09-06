import React from "react";
import { FiShoppingCart, FiSettings, FiPieChart } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaSquarespace } from "react-icons/fa";
import Card from "./Card";

export default function Featured(): JSX.Element {
  return (
    <div>
      <section className="flex flex-col text-center items-center my-52 mx-12">
        <h1 className="mb-20 text-7xl font-bold">Find Customized Solutions</h1>
        <div className="grid grid-cols-1 mt-10 text-center phone:mt-16 phone:grid-cols-2 phone:gap-x-12 tablet:grid-cols-3 tablet:gap-0 desktop:mt-24">
          <div className="tablet:p-8 laptop:p-14">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Ecommerce</h3>
            <FiShoppingCart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-surface">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Landing Pages</h3>
            <GoMegaphone className="h-10 w-10 mx-auto" />

            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-surface">
            <h3 className="mt-2 mb-8 text-2xl font-bold">SaaS</h3>
            <FiSettings className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface">
            <h3 className="mt-2 mb-8 text-2xl font-bold">CRM</h3>
            <RiMoneyDollarCircleLine className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface tablet:border-l">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Analytics</h3>
            <FiPieChart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface tablet:border-l">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Squarespace</h3>
            <FaSquarespace className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center items-center py-52 px-12 bg-background text-on-background">
        <h1 className="mb-20 text-7xl font-bold">
          Crafting Digital Excellence
        </h1>
        <h3 className="w-1/2">
          <span className="text-secondary font-extrabold">
            Lorem Ipsum is simply dummy text
          </span>{" "}
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's.
        </h3>
        <div>
          <Card />
        </div>
      </section>
    </div>
  );
}
