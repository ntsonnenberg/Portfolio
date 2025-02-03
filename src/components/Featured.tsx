import React, { useLayoutEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { SiAmazonec2 } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={38}
              height={38}
              color={"#ffffff"}
              fill={"none"}
              className="mx-auto"
            >
              <circle
                cx="8.5"
                cy="10.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="14.5"
                cy="15.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="18.5"
                cy="7.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15.4341 14.2963L18 9M9.58251 11.5684L13.2038 14.2963M3 19L7.58957 11.8792"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 21H9C5.70017 21 4.05025 21 3.02513 19.9749C2 18.9497 2 17.2998 2 14V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-5 text-base">
              Leverage python web development for powerful analytics
              applications that are efficient and easy to maintain.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-background/20 tablet:border-l">
            <p className="mt-2 mb-8 text-2xl font-bold">AI</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={38}
              height={38}
              color={"#fffff"}
              fill={"none"}
              className="mx-auto"
            >
              <path
                d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 4.74976L17 6.99976H15M18.5 4.74976C18.5 5.16397 18.8358 5.49976 19.25 5.49976C19.6642 5.49976 20 5.16397 20 4.74976C20 4.33554 19.6642 3.99976 19.25 3.99976C18.8358 3.99976 18.5 4.33554 18.5 4.74976Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 19.2498L17 16.9998H15M18.5 19.2498C18.5 18.8355 18.8358 18.4998 19.25 18.4998C19.6642 18.4998 20 18.8355 20 19.2498C20 19.664 19.6642 19.9998 19.25 19.9998C18.8358 19.9998 18.5 19.664 18.5 19.2498Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 11.9998H15M18.5 11.9998C18.5 12.414 18.8358 12.7498 19.25 12.7498C19.6642 12.7498 20 12.414 20 11.9998C20 11.5855 19.6642 11.2498 19.25 11.2498C18.8358 11.2498 18.5 11.5855 18.5 11.9998Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="mt-5 text-base">
              Our experts will guide you through building robust AI applications
              to automate your business and manage customer relations.
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
