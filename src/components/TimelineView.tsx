import React from "react";
import { Timeline } from "./aceternity-ui/timeline";
import Image from "./Image";

export function TimelineView() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Returned from a mission trip in Santiago, Chile
          </p>
          <div className="grid phone:grid-cols-1 tablet:grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fmission-end.JPG?alt=media&token=640bb159-8202-4463-9b06-46168f514283"
              alt="Mission Ending"
              className="rounded-sm outline outline-slate-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Completed building my first web applications with a team for my
            degree
          </p>
          <div className="p-10 grid phone:grid-cols-1 tablet:grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FBCR-project-new.png?alt=media&token=94dde201-fa51-49d9-94a9-ead4aef53e54"
              alt="BRC Project"
              className="rounded-sm outline outline-slate-500 self-start"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FBYU-Excavation-project.png?alt=media&token=48cc4381-7792-4c47-9bc6-82ab85b4f8f0"
              alt="BYU Egypt Excavation Finder Project"
              className="rounded-sm outline outline-slate-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Became the VP of Technology for Enlite Home
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built goenlite.com as a company sales portal for sales reps to track
            their sales metrics, compete in competitions, and manage their sales
            leaderboards.
          </p>
          <div className="p-10 grid phone:grid-cols-1 tablet:grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fsummer-sales-2021.JPG?alt=media&token=8176a746-5394-46a2-8976-c75e250a8c9d"
              alt="Summer Sales 2021 in Sacramento"
              className="rounded-sm outline outline-slate-500"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgo-enlite-leaderboard.PNG?alt=media&token=519ef15b-e89a-442b-984d-c89829951edc"
              alt="Go Enlite Project"
              className="rounded-sm outline outline-slate-500 self-start"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Completed my Master's Captsone project, building an iOS app for
            golfers
          </p>
          <div className="p-10 grid phone:grid-cols-1 tablet:grid-cols-2 phone:gap-4 tablet:gap-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2FLinks.png?alt=media&token=40c3fb5a-a26a-4455-9f39-4de62a61890c"
              alt="Links iOS App Project"
              className="rounded-sm outline outline-slate-500 self-start w-60 h-auto"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2FLinks-mystats.png?alt=media&token=5a732b73-3daf-4942-b8be-76d8fa60abd6"
              alt="Links My Stats Page Project"
              className="rounded-sm outline outline-slate-500 self-start w-60 h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Graduated from BYU with a Master's in Information Systems Management
          </p>
          <div className="p-10 grid phone:grid-cols-1 tablet:grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrad-maeser.JPG?alt=media&token=386745e0-7124-4372-9b96-1de567c74e31"
              alt="BYU Graduation in front of Maesar Building"
              className="rounded-sm outline outline-slate-500"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrad-tanner.JPG?alt=media&token=c59a900d-9972-4ba5-93c1-e1dc7884f13e"
              alt="BYU Graduation in Tanner Building"
              className="rounded-sm outline outline-slate-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="phone:text-md tablet:text-lg laptop:text-2xl mb-8">
            Started at Qualtrics in June as a Technical Account Manager on their
            Enterprise South team
          </p>
          <div className="p-10 grid phone:grid-cols-1 tablet:grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fqualtrics.png?alt=media&token=66899b7c-74fe-4fb1-b9c8-e5704279a422"
              alt="Qualtrics Logo"
              className="rounded-sm outline outline-slate-500"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
