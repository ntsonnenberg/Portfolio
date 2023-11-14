import React from "react";
import { FiShoppingCart, FiSettings, FiPieChart } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaSquarespace } from "react-icons/fa";
import Card from "./Card";
import VideoPlayer from "./VideoPlayer";

export default function Featured(): JSX.Element {
  return (
    <div>
      <section className="flex flex-col text-center items-center my-52 mx-12">
        <h1 className="mb-20 phone:text-6xl tablet:text-7xl font-bold">
          Find Customized Solutions
        </h1>
        <div className="grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-10 text-center phone:mt-16  phone:gap-y-16  tablet:gap-0 desktop:mt-24">
          <div className="tablet:p-8 laptop:p-14">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Ecommerce</h3>
            <FiShoppingCart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Elevate your brand with a custom Ecommerce site to engage shoppers
              and drive sales.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-surface laptop:border-r">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Landing Pages</h3>
            <GoMegaphone className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Capture and convert your audience with SEO-friendly landing pages
              that highlight your brand.
            </p>
          </div>
          <div className="tablet:p-8 tablet:border-r tablet:border-t tablet:border-on-surface laptop:border-t-0 laptop:border-r-0 laptop:p-14">
            <h3 className="mt-2 mb-8 text-2xl font-bold">SaaS</h3>
            <FiSettings className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Launch your innovative Software as a Serice produce with a
              scalable, user-friendly platform.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface">
            <h3 className="mt-2 mb-8 text-2xl font-bold">CRM</h3>
            <RiMoneyDollarCircleLine className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Transform your customer relationships with a custom CRM tool that
              streamlines interactions and harnesses data for growth.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface laptop:border-l">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Analytics</h3>
            <FiPieChart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Leverage custom analytics tools to gain deep insights and make
              informed decisions that propel your business forward.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-surface tablet:border-l">
            <h3 className="mt-2 mb-8 text-2xl font-bold">Squarespace</h3>
            <FaSquarespace className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Stand out online with a professionally designed Squarespace site
              that reflects the excellence of your brand.
            </p>
          </div>
        </div>
        <section className="flex flex-col py-52 gap-10 items-center">
          <h1 className="font-bold phone:text-6xl tablet:text-7xl">
            Everything You Need
          </h1>
          <h3 className="text-md w-[80%] text-on-surface/50">
            Crafting bespoke software solutions, we ensure that every line of
            code aligns precisely with your vision, driving your business
            towards unparalleled growth and efficiency.
          </h3>
          <VideoPlayer className="w-1/2 rounded-sm" />
        </section>
      </section>
      <section className="flex flex-col text-center items-center py-52 px-12 bg-background text-on-background">
        <h1 className="mb-20 phone:text-6xl tablet:text-7xl font-bold">
          Crafting Digital Excellence
        </h1>
        <h3 className="laptop:w-1/2 phone:w-11/12">
          <span className="text-secondary font-extrabold">
            Delivering unparalleled code quality
          </span>{" "}
          and customization to craft digital solutions that embody excellence
          and precision for your unique needs.
        </h3>
        <div className="my-28 grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 gap-10">
          <Card
            imageUrl="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
            title="Gmail"
          >
            Streamline your communication with customers with seamless Gmail
            integrations.
          </Card>
          <Card
            imageUrl="https://www.svgrepo.com/show/303503/shopify-logo.svg"
            title="Shopify"
          >
            Elevate your online store with expert Shopify integrations that
            synchronize your e-commerce capabilities.
          </Card>
          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Font_Awesome_5_brands_squarespace.svg/1200px-Font_Awesome_5_brands_squarespace.svg.png"
            title="Squarespace"
          >
            Enhance your Squarespace site with custom integrations that add
            dynamic functionality.
          </Card>
          <Card
            imageUrl="https://www.svgrepo.com/show/331433/hubspot.svg"
            title="HubSpot"
          >
            Maximie your marketing, sales, and service engagement with tailored
            HubSpot integrations.
          </Card>
          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            title="Slack"
          >
            Boost your team's productivity with custom Slack integrations that
            streamline communication.
          </Card>
          <Card
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/facebook-3-logo-png-transparent.png"
            title="Facebook"
          >
            Expand your reach with integrated Facebook solutions that amplify
            your social media presence.
          </Card>
        </div>
      </section>
    </div>
  );
}
