import { createRemoteFileNode } from "gatsby-source-filesystem";
import { storage } from "./src/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Actions, GatsbyCache } from "gatsby";

interface Props {
  actions: Actions;
  createNodeId: (id: string) => string;
  createContentDigest: (data: unknown) => string;
  cache: GatsbyCache;
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  cache,
}: Props) => {
  const { createNode } = actions;

  const imagePaths = [
    "project-images/BCR-project-new.png",
    "project-images/BYU-Excavation-project.png",
    "project-images/Links.png",
    "project-images/Marketplace-Admin-project.png",
    "project-images/Marketplace-Store-project.png",
    "project-images/Quizzzard-project.png",
    "project-images/ecommerce-admin.jpeg",
    "project-images/ecommerce-store.jpeg",
    "project-images/go-enlite.png",
    "project-images/utah-auto.png",
    "about-me-images/Links-mystats.png",
    "about-me-images/cardiff-castle.jpeg",
    "about-me-images/edinburugh.jpeg",
    "about-me-images/eiffel-tower.png",
    "about-me-images/go-enlite-leaderboard.PNG",
    "about-me-images/grad-maeser.JPG",
    "about-me-images/grad-tanner.JPG",
    "about-me-images/grand-tetons.JPEG",
    "about-me-images/interlaken.jpeg",
    "about-me-images/mission-end.JPG",
    "about-me-images/nice-airbnb.png",
    "about-me-images/qualtrics.png",
    "about-me-images/rome.jpeg",
    "about-me-images/scotland-castle.jpeg",
    "about-me-images/summer-sales-2021.JPG",
    "about-me-images/uintas-hike.jpg",
    "about-me-images/versailles.JPEG",
    "home-images/Slack_icon.png",
    "home-images/facebook-logo.png",
    "home-images/gmail-logo.png",
    "home-images/go-enlite-landing.png",
    "home-images/hubspot-logo.png",
    "home-images/logo-Squarespace.png",
    "home-images/profile.jpg",
    "home-images/shopify-logo.png",
    "client-logos/enlite-logo.png",
    "client-logos/utah-automotive-logo.png",
  ];

  for (const imagePath of imagePaths) {
    const storageRef = ref(storage, imagePath);

    try {
      const url = await getDownloadURL(storageRef);

      // Create remote file node
      const fileNode = await createRemoteFileNode({
        url,
        parentNodeId: undefined,
        createNode,
        createNodeId,
        cache,
      });

      if (fileNode) {
        createNode({
          id: createNodeId(imagePath),
          imageUrl: url,
          internal: {
            type: "FirebaseImage",
            contentDigest: createContentDigest(imagePath),
          },
          file___NODE: fileNode.id,
        });
      }
    } catch (error) {
      console.error(`Error fetching image "${imagePath}"`, error);
    }
  }
};
