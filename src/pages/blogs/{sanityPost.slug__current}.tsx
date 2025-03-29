import { graphql, Link } from "gatsby";
import { Post } from "../../lib/posts";
import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import SanityImage from "../../components/SanityImage";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponentProps,
  PortableTextComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

interface SanityImageAsset {
  _type: "image";
  asset?: {
    _type: "reference";
    _ref?: string;
    url: string;
  };
  alt?: string;
  hotspot?: {
    height: number;
    width: number;
  };
}

const portableTextComponent: PortableTextComponents = {
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="mb-4">{children}</p>
    ),
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImageAsset }) => {
      if (!value.asset) {
        return null;
      }

      return (
        <div className="my-4">
          <SanityImage
            imageId={value.asset._ref}
            alt={value.alt || "Blog post image"}
            className="w-full h-auto"
          />
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: PortableTextMarkComponentProps) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

interface Props {
  data: {
    sanityPost: Post;
  };
  children?: React.ReactNode;
}

export default function BlogPage({ data: { sanityPost }, children }: Props) {
  const { mainImage } = sanityPost;
  const {
    author: { image: authorImage },
  } = sanityPost;

  const prettyPublishedDate = new Date(
    sanityPost.publishedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="flex flex-col pt-40 mx-40">
        <Link
          to="/blogs"
          className="flex gap-2 py-1 text-lg text-gray-600 items-center mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back to Blogs
        </Link>
        <div className="mb-20 flex flex-col gap-6">
          <h1 className="phone:text-xl tablet:text-3xl laptop:text-5xl">
            {sanityPost.title}
          </h1>
          <h2 className="flex gap-2 items-center text-gray-500">
            <SanityImage
              imageId={authorImage?.asset.id}
              alt={authorImage?.asset.altText}
              className="w-10 h-10 ring-1 ring-gray-400 rounded-full"
            />
            {sanityPost.author.name}
            <span className="self-stretch border border-l mr-1 border-gray-500 my-2.5"></span>
            Published {prettyPublishedDate}
          </h2>
          <div className="mt-4 flex gap-2">
            {sanityPost.tags.map((tag) => (
              <div
                key={tag.value}
                className="ring-1 ring-gray-500 bg-slate-800 shadow-lg px-3 rounded-full"
              >
                {tag.label}
              </div>
            ))}
          </div>
        </div>
        <SanityImage
          imageId={mainImage?.asset.id}
          alt={mainImage?.asset.altText}
          className="shadow-stand-out w-full mb-20"
        />
        <PortableText
          value={sanityPost._rawBody}
          components={portableTextComponent}
        />
      </div>
    </Layout>
  );
}

export function Head({ data: { sanityPost } }: Props): JSX.Element {
  return (
    <SEO
      title={sanityPost.title}
      pathname={`/blogs/${sanityPost.slug.current}`}
    />
  );
}

export const query = graphql`
  query ($id: String) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
        source
      }
      tags {
        label
        value
      }
      author {
        id
        name
        image {
          asset {
            id
            label
            title
            description
            altText
            originalFilename
            mimeType
            size
            url
          }
          hotspot {
            height
            width
          }
        }
      }
      mainImage {
        asset {
          id
          label
          title
          description
          altText
          originalFilename
          mimeType
          size
          url
        }
        hotspot {
          height
          width
        }
      }
      _rawBody
      publishedAt
    }
  }
`;

// body {
//   _key
//   _type
//   style
//   listItem
//   level
//   children {
//     _key
//     _type
//     text
//   }
// }
