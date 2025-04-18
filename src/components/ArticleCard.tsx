import { Link } from "gatsby";
import Image from "./Image";
import React from "react";
import { Post } from "../lib/sanity/posts";
import { GatsbyImage } from "gatsby-plugin-image";
import SanityImage from "./SanityImage";

interface Props {
  post: Post;
}

export default function ArticleCard({ post }: Props) {
  const { mainImage } = post;
  const { tags } = post;

  return (
    <Link
      to={`/articles/${post.slug.current}`}
      className="w-full max-w-[280px]"
    >
      <div className="overflow-hidden rounded-2xl shadow-stand-out backdrop-blur-xl shadow-xs transition-all duration-300 hover:shadow-md">
        <SanityImage
          imageId={mainImage?.asset.id}
          alt={mainImage?.asset.altText}
          className="object-cover h-[320px]"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag.value}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/90 text-on-background backdrop-blur-md shadow-xs border border-white/20 dark:border-zinc-800/50"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="text-sm text-zinc-500 line-clamp-2">
              {post.author.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
