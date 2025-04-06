import Layout from "../components/Layout";
import React from "react";
import { getPosts } from "../lib/posts";
import SEO from "../components/Seo";
import ArticleCard from "../components/ArticleCard";

export default function ArticlesPage(): JSX.Element {
  const posts = getPosts();

  if (!posts) {
    return (
      <Layout>
        <h2 className="p-40 min-h-screen text-2xl font-bold">
          No Articles Available
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
      <div className="py-60">
        <h1 className="phone:text-3xl tablet:text-5xl text-center mb-20 phone:w-full tablet:w-2/3 laptop:w-1/2 mx-auto">
          Popular Tech Magazines & Web Development Articles
        </h1>
        <div className="min-h-screen grid justify-items-center phone:grid-cols-1 phone:gap-12 tablet:grid-cols-2 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
          {sortedPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Popular Tech Magazines and Articles | Web Development Insights | Bespoke Code"
      description="Explore curated tech articles for business owners and developers alike. Stay informed on web development trends that can help your business thrive. Expert insights from Bespoke Code."
      pathname="/articles"
    />
  );
}
