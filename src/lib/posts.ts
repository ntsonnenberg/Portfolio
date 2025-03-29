import { graphql, useStaticQuery } from "gatsby";

interface Image {
  asset: {
    id: string;
    label: string;
    title: string;
    description: string;
    altText: string;
    originalFilename: string;
    mimeType: string;
    size: number;
    url: string;
  };
  hotspot: {
    height: number;
    width: number;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: {
    current: string;
    source: string | null;
  };
  tags: {
    label: string;
    value: string;
  }[];
  author: {
    id: string;
    name: string;
    image: Image | null;
  };
  body: {
    _key: string;
    _type: string;
    style: string;
    listItem: string | null;
    level: number | null;
    _rawChildren: {
      text: string;
    }[];
  }[];
  _rawBody: {
    _key: string;
    _type: string;
    asset?: {
      _ref: string;
      _type: string;
    };
    children?: {
      _key: string;
      _type: string;
      text: string;
    }[];
    style?: string;
  }[];
  mainImage: Image | null;
  publishedAt: Date;
}

export const getPosts = () => {
  const postNodes = useStaticQuery(graphql`
    query {
      allSanityPost {
        edges {
          node {
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
            body {
              _key
              _type
              style
              listItem
              level
              _rawChildren
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
            publishedAt
          }
        }
      }
    }
  `);

  const posts: Post[] = postNodes.allSanityPost.edges.map(
    ({ node }: { node: Post }) => ({
      id: node.id,
      title: node.title,
      slug: node.slug,
      tags: node.tags,
      author: node.author,
      body: node.body,
      mainImage: node.mainImage,
      publishedAt: node.publishedAt,
    })
  );

  return posts;
};
