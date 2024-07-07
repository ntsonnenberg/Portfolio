import React from "react";
import Card from "./Card";
import TypingHeader from "./TypingHeader";

export default function IntegrationFeatures(): JSX.Element {
  return (
    <section className="flex flex-col text-center items-center my-40 px-12 bg-background text-on-background">
      <div className="phone:h-screen phone:w-auto laptop:w-0 laptop:h-0" />
      <div className="py-10">
        <TypingHeader color="on-background">
          Crafting Digital Excellence
        </TypingHeader>
      </div>
      <h3 className="laptop:w-1/2 phone:w-11/12">
        <span className="text-secondary font-extrabold">
          Delivering unparalleled code quality
        </span>{" "}
        and customization to craft digital solutions that embody excellence and
        precision for your unique needs.
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
          imageUrl="https://www.buildateam.io/wp-content/uploads/2018/07/logo-Squarespace.png"
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
          Expand your reach with integrated Facebook solutions that amplify your
          social media presence.
        </Card>
      </div>
    </section>
  );
}
