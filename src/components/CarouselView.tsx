import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from "./ui-layouts/carousel";
import Image from "./Image";

interface Props {
  images: {
    src: string;
    alt: string;
    overlayText: string;
  }[];
}

export default function CarouselView({ images }: Props) {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
      <SliderContainer className="gap-2">
        {images.map((image) => (
          <Slider key={image.alt} className="w-full relative">
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold phone:text-xl tablet:text-3xl laptop:text-5xl z-40">
              {image.overlayText}
            </span>
            <Image src={image.src} alt={image.alt} />
          </Slider>
        ))}
      </SliderContainer>
      <div className="flex justify-center py-4">
        <SliderDotButton />
      </div>
    </Carousel>
  );
}
