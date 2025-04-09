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

  const filePaths = [
    // Project Images Folder

    // BCR
    "project-images/BCR/BCR-hero.jpg",
    "project-images/BCR/BCR-main.png",

    // BYU Egypt Excavation Finder
    "project-images/byu-egypt-excavation-finder/byu-excavation-hero.jpg",
    "project-images/byu-egypt-excavation-finder/byu-excavation-main.png",

    // Ecommerce Admin
    "project-images/ecommerce-admin/ecommerce-admin-hero.jpg",
    "project-images/ecommerce-admin/ecommerce-admin-main.jpeg",
    "project-images/ecommerce-admin/ecommerce-admin-new-product.png",
    "project-images/ecommerce-admin/ecommerce-admin-products.png",

    // Ecommerce Store
    "project-images/ecommerce-store/ecommerce-store-cart.png",
    "project-images/ecommerce-store/ecommerce-store-hero.jpg",
    "project-images/ecommerce-store/ecommerce-store-home.png",
    "project-images/ecommerce-store/ecommerce-store-main.jpeg",
    "project-images/ecommerce-store/ecommerce-store-product.png",

    // Go Enlite
    "project-images/go-enlite/go-enlite-admin-competitions.png",
    "project-images/go-enlite/go-enlite-hero.jpg",
    "project-images/go-enlite/go-enlite-leaderboard-individuals.png",
    "project-images/go-enlite/go-enlite-leaderboard-offices.png",
    "project-images/go-enlite/go-enlite-main.png",
    "project-images/go-enlite/go-enlite-solar-calculator.png",
    "project-images/go-enlite/go-enlite-team-competition-modal.png",
    "project-images/go-enlite/go-enlite-team-competition.png",

    // Links
    "project-images/links/links-golf-hero.jpg",
    "project-images/links/links-home-page.png",
    "project-images/links/links-my-stats-page.png",
    "project-images/links/links-play-page.png",

    // Marketplace Admin
    "project-images/marketplace-admin/marketplace-admin-add-category.png",
    "project-images/marketplace-admin/marketplace-admin-categories.png",
    "project-images/marketplace-admin/marketplace-admin-edit-homepage.png",
    "project-images/marketplace-admin/marketplace-admin-edit-product.png",
    "project-images/marketplace-admin/marketplace-admin-hero.jpg",
    "project-images/marketplace-admin/marketplace-admin-main.png",

    // Marketplace Store
    "project-images/marketplace-store/marketplace-store-cart.png",
    "project-images/marketplace-store/marketplace-store-companies.png",
    "project-images/marketplace-store/marketplace-store-hero.jpg",
    "project-images/marketplace-store/marketplace-store-main.png",

    // Quizzzard
    "project-images/quizzzard/quizzzard-analyzing.png",
    "project-images/quizzzard/quizzzard-hero.jpg",
    "project-images/quizzzard/quizzzard-main.png",
    "project-images/quizzzard/quizzzard-quiz-answers.png",
    "project-images/quizzzard/quizzzard-quiz-questions.png",

    // Utah Automotive
    "project-images/utah-automotive/utah-auto-hero.jpg",
    "project-images/utah-automotive/utah-auto-main.png",

    // About Me Images Folder
    "about-me-images/Lauterbrunnen-v2.webp",
    "about-me-images/Lauterbrunnen.png",
    "about-me-images/Links-mystats.png",
    "about-me-images/antibes-billionares-bay.JPEG",
    "about-me-images/cardiff-castle.jpeg",
    "about-me-images/cliffs-of-dover.png",
    "about-me-images/close-eiffel-tower.png",
    "about-me-images/colosseum.png",
    "about-me-images/edinburugh.jpeg",
    "about-me-images/eiffel-tower.png",
    "about-me-images/go-enlite-leaderboard.PNG",
    "about-me-images/grad-maeser.JPG",
    "about-me-images/grad-tanner.JPG",
    "about-me-images/grand-tetons.JPEG",
    "about-me-images/interlaken.jpeg",
    "about-me-images/london.png",
    "about-me-images/milan-italy.png",
    "about-me-images/mission-end.JPG",
    "about-me-images/nice-airbnb.png",
    "about-me-images/piza-italy.png",
    "about-me-images/qualtrics.png",
    "about-me-images/rome.jpeg",
    "about-me-images/scotland-castle.jpeg",
    "about-me-images/stonehenge.png",
    "about-me-images/summer-sales-2021.JPG",
    "about-me-images/uintas-hike.jpg",
    "about-me-images/versailles.JPEG",

    // Home Images Folder
    "home-images/Slack_icon.png",
    "home-images/facebook-logo.png",
    "home-images/gmail-logo.png",
    "home-images/hubspot-logo.png",
    "home-images/logo-Squarespace.png",
    "home-images/profile.jpeg",
    "home-images/shopify-logo.png",

    // Client Logos Folder
    "client-logos/enlite-logo.png",
    "client-logos/utah-automotive-logo.png",

    // Root Folder
    "bespoke-code-no-bg.svg",
  ];

  for (const filePath of filePaths) {
    const storageRef = ref(storage, filePath);

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
        if (fileNode.extension === "mp4") {
          createNode({
            id: createNodeId(filePath),
            videoUrl: url,
            internal: {
              type: "FirebaseVideo",
              contentDigest: createContentDigest(filePath),
            },
            file___NODE: fileNode.id,
          });
        }

        createNode({
          id: createNodeId(filePath),
          imageUrl: url,
          internal: {
            type: "FirebaseImage",
            contentDigest: createContentDigest(filePath),
          },
          file___NODE: fileNode.id,
        });
      }
    } catch (error) {
      console.error(`Error fetching image "${filePath}"`, error);
    }
  }
};
