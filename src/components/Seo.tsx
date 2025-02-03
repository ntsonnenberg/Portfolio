import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export default function SEO({ title, description, pathname, children }: Props) {
  const {
    title: defaultTitle,
    description: defaultDecription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDecription,
    image: image,
    url: `${siteUrl}${pathname || ""}`,
  };

  return (
    <>
      <title>Bespoke Dev Solutions - Build Custom Web Applications</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="type" content="website" />
      <meta name="theme-color" content="#141414" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:type" content="website" />
      <meta name="og:card" content="summary_large_image" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:type" content="website" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/@botpoison/browser" async></script>
      {children}
    </>
  );
}
