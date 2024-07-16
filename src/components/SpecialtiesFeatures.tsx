import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duraction: 2 });

export default function SpecialtiesFeatures(): JSX.Element {
  useGSAP(() => {
    let panels = gsap.utils.toArray("#panel");
    let observer = ScrollTrigger.normalizeScroll(true);
    let scrollTween;

    document.addEventListener(
      "touchstart",
      (event) => {
        if (scrollTween) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false }
    );

    const goToSection = (index: number) => {
      scrollTween = gsap.to(window, {
        scrollTo: { y: index * innerHeight, autoKill: false },
        onStart: () => {
          observer?.disable();
          observer?.enable();
        },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    };

    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=1099%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(index),
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });
  });

  return (
    <div id="container" className="w-full min-h-screen">
      <div
        id="panel"
        className="relative w-svw h-dvh flex-none overflow-hidden bg-blue-500"
      ></div>
      <div
        id="panel"
        className="relative w-svw h-dvh flex-none overflow-hidden bg-orange-500"
      ></div>
      <div
        id="panel"
        className="relative w-svw h-dvh flex-none overflow-hidden bg-purple-500"
      ></div>
      <div
        id="panel"
        className="relative w-svw h-dvh flex-none overflow-hidden bg-green-500"
      ></div>
    </div>
  );
}
