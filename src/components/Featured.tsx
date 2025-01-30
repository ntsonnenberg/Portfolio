import React, { useLayoutEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { SiAmazonec2 } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { TbChartInfographic } from "react-icons/tb";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import FadeBlockHeader from "./FadeBlockHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Featured(): JSX.Element {
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const panelSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray("#panel");
      let container = panelContainerRef.current || null;

      let scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 2 },
            delay: 0.2,
          },
          end: () => "+=" + container?.offsetWidth,
        },
      });

      gsap.from("#panel-text-1", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
        scrollTrigger: "#panel-text-1",
        autoAlpha: 0,
      });
      gsap.from("#panel-text-2", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: "#panel-text-2",
          containerAnimation: scrollTween,
        },
        autoAlpha: 0,
      });
      gsap.from("#panel-text-3", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: "#panel-text-3",
          containerAnimation: scrollTween,
        },
        autoAlpha: 0,
      });
      gsap.from("#panel-text-4", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: "#panel-text-4",
          containerAnimation: scrollTween,
        },
        autoAlpha: 0,
      });

      gsap.set(panelSectionRef.current, {
        height: 1.5 * (container?.offsetWidth || 0),
      });
    }, panelSectionRef);

    return () => ctx.revert();
  });

  return (
    <div>
      <section className="flex flex-col text-center items-center my-52 mx-12">
        <FadeBlockHeader color="on-background">
          Find Customized Solutions
        </FadeBlockHeader>
        <div className=" grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-10 text-center phone:mt-16  phone:gap-y-16  tablet:gap-0 desktop:mt-24">
          <div className="tablet:p-8 laptop:p-14">
            <p className="mt-2 mb-8 text-2xl font-bold">Ecommerce</p>
            <FiShoppingCart className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Ready to build your eCommerce website? Our team has the expertise
              to help you sell online efficiently.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-background/20 laptop:border-r">
            <p className="mt-2 mb-8 text-2xl font-bold">Landing Pages</p>
            <GoMegaphone className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Hire a front end web developer who will create eye-catching
              designs that keep your users engaged.
            </p>
          </div>
          <div className="tablet:p-8 tablet:border-r tablet:border-t tablet:border-on-background/20 laptop:border-t-0 laptop:border-r-0 laptop:p-14">
            <p className="mt-2 mb-8 text-2xl font-bold">SaaS</p>
            <VscTerminalCmd className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Transform your ideas into reality with our cutting-edge web app
              developemnt serices designed for scalability.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-background/20">
            <p className="mt-2 mb-8 text-2xl font-bold">
              Infrastructure Management
            </p>
            <SiAmazonec2 className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Explore the latest software for apps that streamline your
              development process and enhance functionality.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-background/20 laptop:border-l">
            <p className="mt-2 mb-8 text-2xl font-bold">Analytics</p>
            <TbChartInfographic className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Leverage python web development for powerful analytics
              applications that are efficient and easy to maintain.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-background/20 tablet:border-l">
            <p className="mt-2 mb-8 text-2xl font-bold">FinTech</p>
            <LiaMoneyCheckAltSolid className="h-10 w-10 mx-auto" />
            <p className="mt-5 text-base">
              Our experts will guide you through creating a web page that not
              only looks great but also convers visitors into customers.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={panelSectionRef}
        className="flex flex-col mb-40 gap-10 items-center"
      >
        <div
          id="panel-container"
          ref={panelContainerRef}
          className="flex overflow-x-hidden w-full min-h-screen"
        >
          <div
            id="panel"
            className="relative w-svw h-dvh flex-none overflow-hidden phone:flex phone:justify-center laptop:block"
          >
            <VideoPlayer
              video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fpanel-1-vid.mp4?alt=media&token=3220e429-ef51-4af7-b37c-0418f523b5cd"
              className="absolute phone:w-auto phone:min-w-full phone:min-h-full phone:max-w-none laptop:min-w-0 laptop:min-h-0 laptop:max-w-full"
            />
            <p
              id="panel-text-1"
              className="absolute flex items-center font-bold w-1/3 text-clip m-40 phone:text-xl tablet:text-4xl laptop:text-6xl"
            >
              Custom web design for your brand
            </p>
          </div>
          <div
            id="panel"
            className="relative w-svw h-dvh flex-none overflow-hidden phone:flex phone:justify-center laptop:block"
          >
            <VideoPlayer
              video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fpanel-2-vid.mp4?alt=media&token=43689a25-c34f-4bca-bf97-b198316b1099"
              className="absolute phone:w-auto phone:min-w-full phone:min-h-full phone:max-w-none laptop:min-w-0 laptop:min-h-0 laptop:max-w-full"
            />
            <p
              id="panel-text-2"
              className="absolute flex items-center m-40 font-bold w-1/3 text-clip phone:text-xl tablet:text-4xl laptop:text-6xl"
            >
              Expand your reach to your targeted audience
            </p>
          </div>
          <div
            id="panel"
            className="relative w-svw h-dvh flex-none overflow-hidden phone:flex phone:justify-center laptop:block"
          >
            <VideoPlayer
              video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fpanel-3-vid.mp4?alt=media&token=08a744dd-1e7c-467e-bbff-88c02f236cec"
              className="absolute phone:w-auto phone:min-w-full phone:min-h-full phone:max-w-none laptop:min-w-0 laptop:min-h-0 laptop:max-w-full"
            />
            <p
              id="panel-text-3"
              className="absolute flex items-center font-bold w-1/3 text-clip p-4 m-40 bg-background phone:text-xl tablet:text-4xl laptop:text-6xl"
            >
              Integrate and automate your operations
            </p>
          </div>
          <div
            id="panel"
            className="relative w-svw h-dvh flex-none overflow-hidden phone:flex phone:justify-center laptop:block"
          >
            <VideoPlayer
              video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fpanel-4-vid.mp4?alt=media&token=4b22eb60-066d-45d4-a151-d6bce795a252"
              className="absolute phone:w-auto phone:min-w-full phone:min-h-full phone:max-w-none laptop:min-w-0 laptop:min-h-0 laptop:max-w-full"
            />
            <p
              id="panel-text-4"
              className="absolute flex items-center font-bold w-1/3 text-clip p-4 m-40 bg-background phone:text-xl tablet:text-4xl laptop:text-6xl"
            >
              Build your dream, one line of code at a time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
