import React from "react";
import Card from "./Card";
import TypingHeader from "./TypingHeader";

export default function IntegrationFeatures(): JSX.Element {
  return (
    <section className="flex flex-col text-center items-center my-40 px-12 bg-background text-on-background">
      <div className="phone:h-screen phone:w-auto laptop:h-40" />
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
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Fgmail-logo.png?alt=media&token=a4b05a7a-73aa-4966-a6ae-2cbd19d6060f"
          title="Gmail"
        >
          Streamline your communication with customers with seamless Gmail
          integrations.
        </Card>
        <Card
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Fshopify-logo.png?alt=media&token=d1bd6282-20d5-4d34-835b-4527e5f3d42f"
          title="Shopify"
        >
          Elevate your online store with expert Shopify integrations that
          synchronize your e-commerce capabilities.
        </Card>
        <Card
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Flogo-Squarespace.png?alt=media&token=742b0ca6-746c-43ca-ab4c-38133a154f00"
          title="Squarespace"
        >
          Enhance your Squarespace site with custom integrations that add
          dynamic functionality.
        </Card>
        <Card
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Fhubspot-logo.png?alt=media&token=7f29bf28-2091-45dc-97b0-ea313326dd3a"
          title="HubSpot"
        >
          Maximie your marketing, sales, and service engagement with tailored
          HubSpot integrations.
        </Card>
        <Card
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2FSlack_icon.png?alt=media&token=e499cb00-d4d3-4419-99e9-19ba83a58bd6"
          title="Slack"
        >
          Boost your team's productivity with custom Slack integrations that
          streamline communication.
        </Card>
        <Card
          imageUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Ffacebook-logo.png?alt=media&token=d86f4486-4a51-4f38-8fd2-c42b09b4820f"
          title="Facebook"
        >
          Expand your reach with integrated Facebook solutions that amplify your
          social media presence.
        </Card>
      </div>
    </section>
  );
}
