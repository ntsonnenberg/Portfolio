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
        <h1 className="mb-20 text-7xl phone:text-6xl tablet:text-7xl font-bold">
          Find Customized Solutions
        </h1>
        <div className="grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-10 text-center phone:mt-16  phone:gap-y-16  tablet:gap-0 desktop:mt-24">
          <div className="tablet:p-8 laptop:p-14">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Ecommerce</h3>
            <FiShoppingCart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-surface laptop:border-r">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Landing Pages</h3>
            <GoMegaphone className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          <div className="tablet:p-8 tablet:border-r tablet:border-t tablet:border-on-surface laptop:border-t-0 laptop:border-r-0 laptop:p-14">
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
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface laptop:border-l">
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
        <h1 className="mb-20 phone:text-6xl tablet:text-7xl font-bold">
          Crafting Digital Excellence
        </h1>
        <h3 className="laptop:w-1/2 phone:w-11/12">
          <span className="text-secondary font-extrabold">
            Lorem Ipsum is simply dummy text
          </span>
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's.
        </h3>
        <div className="my-28 grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 gap-10">
          <Card
            imageUrl="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
            title="Gmail"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
          <Card
            imageUrl="https://www.svgrepo.com/show/303503/shopify-logo.svg"
            title="Shopify"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Font_Awesome_5_brands_squarespace.svg/1200px-Font_Awesome_5_brands_squarespace.svg.png"
            title="Squarespace"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
          <Card
            imageUrl="https://www.svgrepo.com/show/331433/hubspot.svg"
            title="HubSpot"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            title="Slack"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
          <Card
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/facebook-3-logo-png-transparent.png"
            title="Facebook"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Card>
        </div>
      </section>
    </div>
  );
}
