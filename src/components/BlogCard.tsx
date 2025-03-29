import { Link } from "gatsby";
import Image from "./Image";
import React from "react";
import { Post } from "../lib/posts";
import { GatsbyImage } from "gatsby-plugin-image";
import SanityImage from "./SanityImage";

interface Props {
  post: Post;
}

export default function BlogCard({ post }: Props) {
  const { mainImage } = post;
  const { tags } = post;

  return (
    <Link
      to={`/blogs/${post.slug.current}`}
      className="block w-full max-w-[280px] group shadow-stand-out"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl shadow-xs transition-all duration-300 hover:shadow-md">
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
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5 mix-blend-exclusion">
              <h3 className="text-lg font-semibold text-white leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-200 line-clamp-2">
                {post.author.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
