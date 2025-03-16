import React from "react";
import FadeBlockHeader from "./FadeBlockHeader";

export default function Featured(): JSX.Element {
  return (
    <div>
      <section className="flex flex-col text-center items-center my-52 mx-12">
        <FadeBlockHeader color="on-background">
          Find Customized Solutions
        </FadeBlockHeader>
        <div className=" grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-10 text-center phone:mt-16  phone:gap-y-16  tablet:gap-0 desktop:mt-24">
          <div className="tablet:p-8 laptop:p-14">
            <p className="mt-2 mb-8 text-2xl font-bold">Ecommerce</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <p className="mt-5 text-base">
              Ready to build your eCommerce website? Our team has the expertise
              to help you sell online efficiently.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-l tablet:border-on-background/20 laptop:border-r">
            <p className="mt-2 mb-8 text-2xl font-bold">Landing Pages</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
              />
            </svg>

            <p className="mt-5 text-base">
              Hire a front end web developer who will create eye-catching
              designs that keep your users engaged.
            </p>
          </div>
          <div className="tablet:p-8 tablet:border-r tablet:border-t tablet:border-on-background/20 laptop:border-t-0 laptop:border-r-0 laptop:p-14">
            <p className="mt-2 mb-8 text-2xl font-bold">SaaS</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <p className="mt-5 text-base">
              Transform your ideas into reality with our cutting-edge web app
              developemnt serices designed for scalability.
            </p>
          </div>
          <div className="tablet:p-8 laptop:p-14 tablet:border-t tablet:border-on-background/20">
            <p className="mt-2 mb-8 text-2xl font-bold">
              Infrastructure Management
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
              />
            </svg>

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
    </div>
  );
}
