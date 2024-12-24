import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

interface ProjectDoc {
  title: string;
  link: string;
  image: string;
}

const firestore_auth = {
  type: process.env.FIRESTORE_TYPE,
  project_id: process.env.FIRESTORE_PROJECT_ID,
  private_key_id: process.env.FIRESTORE_PK_ID,
  private_key: process.env.FIRESTORE_PK,
  client_email: process.env.FIRESTORE_CLIENT_EMAIL,
  client_id: process.env.FIRESTORE_CLIENT_ID,
  auth_uri: process.env.FIRESTORE_AUTH_URI,
  token_uri: process.env.FIRESTORE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIRESTORE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIRESTORE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIRESTORE_UNIVERSE_DOMAIN,
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://bespokedevsolutions.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/bespoke-black-no-bg.png",
      },
    },
    {
      resolve: "gatsby-firesource",
      options: {
        credential: firestore_auth,
        types: [
          {
            type: "Project",
            collection: "projects",
            map: (doc: ProjectDoc) => ({
              title: doc.title,
              link: doc.link,
              image: doc.image,
            }),
          },
        ],
      },
    },
  ],
};

export default config;
