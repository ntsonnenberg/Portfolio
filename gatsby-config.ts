import { type GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

interface Project {
  title: string;
  link?: string;
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
    image: `https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.png?alt=media&token=1f6923f7-c1ba-4ab8-89af-8705c5d507b4`,
    siteUrl: `https://bespokecode.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "@sentry/gatsby",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://bespokecode.io",
        sitemap: "https://bespokecode.io/sitemap-index.xml",
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
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
            map: (doc: Project) => ({
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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID || "",
        dataset: process.env.SANITY_DATASET_NAME || "",
        token: process.env.SANITY_AUTH_TOKEN || "",
        graphqlTag: "experiment",
        watchMode: true,
      },
    },
  ],
};

export default config;
