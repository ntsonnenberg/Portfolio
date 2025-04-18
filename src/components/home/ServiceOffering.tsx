import React from "react";
import { Service } from "../../lib/sanity/services";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceOffering({ service, index }: Props) {
  return (
    <div key={service.id} className="phone:py-20 tablet:py-40">
      <div className="px-4 mx-auto max-w-7xl phone:px-6 laptop:px-8">
        <div
          className={`flex phone:flex-col ${
            index % 2 === 0 ? "tablet:flex-row-reverse" : "tablet:flex-row"
          } tablet:items-center gap-y-8 tablet:gap-x-16`}
        >
          <div className="text-center tablet:text-left laptop:pr-16">
            <h2 className="text-3xl font-bold phone:text-4xl desktop:text-5xl">
              {service.title}
            </h2>
            <h3 className="pl-4 pt-2 text-gray-400">{service.packageOffer}</h3>
            <p className="mt-4 text-base phone:mt-8">{service.description}</p>
            {/* <div className="relative inline-flex mt-10 group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-primary via-purple-500 to-primary-variant rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          <Link
            to={service.slug.current}
            title=""
            className="relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Learn More
          </Link>
        </div> */}
          </div>
          <div>
            {/* Make this better null checking */}
            {/* <SanityImage
          imageId={service?.image ? service.image?.asset.id : ""}
          alt={service?.image ? service.image?.asset.altText : ""}
          loading="lazy"
        /> */}
            {/* <img
          className="w-full mx-auto"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/2/illustration.png"
          alt=""
        /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
