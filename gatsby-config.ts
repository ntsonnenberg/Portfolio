import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

interface ProjectDoc {
  title: string;
  link: string;
  image: string;
  heroImage: string;
  images: string[];
  catchPhrase: string;
  subtitle: string;
  description: string;
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
    title: `Bespoke Code | Professional App Development Services`,
    description: `Hire our experienced freelance web developers for customized solutions that fit you busines requirements.`,
    image: `/images/bespoke-code-no-bg.png`,
    siteUrl: `https://bespokecode.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-RPLQCK4TJB"],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
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
        name: "Bespoke Code",
        short_name: "BC",
        start_url: "/",
        background_color: "#00FFFFFF",
        lang: "en",
        display: "standalone",
        description:
          "Build your ideas into reality with a custom web application for your business.",
        icon: "src/images/bespoke-code-symbol.svg",
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
              heroImage: doc.heroImage,
              images: doc.images,
              catchPhrase: doc.catchPhrase,
              subtitle: doc.subtitle,
              description: doc.description,
            }),
          },
        ],
      },
    },
  ],
};

export default config;
