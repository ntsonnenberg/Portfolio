import Layout from "../components/Layout";
import React from "react";
import { getPosts } from "../lib/posts";
import SEO from "../components/Seo";
import BlogCard from "../components/BlogCard";

export default function BlogsPage(): JSX.Element {
  const posts = getPosts();

  if (!posts) {
    return (
      <Layout>
        <h2 className="p-40 min-h-screen text-2xl font-bold">
          No Blogs Available
        </h2>
      </Layout>
    );
  }

  const sortedPosts = posts.sort((a, b) => {
    const aHasNewTag = a.tags.some((tag) => tag.value === "new");
    const bHasNewTag = b.tags.some((tag) => tag.value === "new");

    if (aHasNewTag && !bHasNewTag) {
      return -1;
    } else if (!aHasNewTag && bHasNewTag) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <Layout>
      <div className="py-60 min-h-screen grid justify-items-center phone:grid-cols-1 phone:gap-12 tablet:grid-cols-2 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        {sortedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Our Blogs and Articles"
      description="Learn more about our experience and research with our free articles and resources to help you better leverage technology in your business in a scalable way."
      pathname="/blogs"
    />
  );
}
