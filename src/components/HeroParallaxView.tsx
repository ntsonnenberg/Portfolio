"use client";

import React from "react";
import { HeroParallax } from "./aceternity-ui/hero-parallax";
import { getProjects } from "../lib/projects";

export function HeroParallaxView() {
  const projects = getProjects();

  return <HeroParallax projects={projects} />;
}

// export const products = [
//   {
//     title: "Quizzzard",
//     link: "https://github.com/ntsonnenberg/quizzard",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FQuizzzard-project.png?alt=media&token=ff691a65-020a-464a-8e93-a8d36c26698a",
//   },
//   {
//     title: "BYU Egypt Excavation Finder",
//     link: "https://github.com/WinterISGroup/EgyptExcavationProject",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FBYU-Excavation-project.png?alt=media&token=48cc4381-7792-4c47-9bc6-82ab85b4f8f0",
//   },
//   {
//     title: "Marketplace Admin",
//     link: "https://github.com/ntsonnenberg/online-marketplace-admin",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FMarketplace-Admin-project.png?alt=media&token=1915c4dd-0fb7-4dcc-aecc-bba43ce73e95",
//   },
//   {
//     title: "Marketplace Store",
//     link: "https://github.com/ntsonnenberg/online-marketplace-customer",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FMarketplace-Store-project.png?alt=media&token=02df9b2e-ef4e-4f34-8135-7c719fe6a447",
//   },
//   {
//     title: "Utah Automotive Magazine",
//     link: "https://utah-automotive.com/",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2Futah-auto.png?alt=media&token=5157ac86-ede1-4229-8ec5-5a138738f270",
//   },
//   {
//     title: "Ecomerce Admin",
//     link: "https://ecommerce-admin-taupe.vercel.app/",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2Fecommerce-admin.jpeg?alt=media&token=5aca875c-d679-4d62-9e85-60303afb1b30",
//   },
//   {
//     title: "Ecommerce Store",
//     link: "https://ecommerce-front-9975il0qq-ntsonnenberg.vercel.app/",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2Fecommerce-store.jpeg?alt=media&token=899dccc6-029c-453f-9311-946f01513234",
//   },
//   {
//     title: "Go Enlite",
//     link: "https://goenlite.com/",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2Fgo-enlite.png?alt=media&token=57c9ae1d-65d7-4b46-bddb-3609b274016b",
//   },
//   {
//     title: "BCR",
//     link: "https://github.com/jnoahjohnson/black-cyber-recruiter",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FBCR-project.png?alt=media&token=98f64c86-d242-437f-9dcf-d2c1354e99b7",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
// ];
