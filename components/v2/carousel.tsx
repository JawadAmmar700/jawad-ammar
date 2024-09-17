import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarouselUIProps = {
  slides: Slides;
};

const CarouselUI = ({ slides }: CarouselUIProps) => {
  return (
    <Carousel orientation="horizontal" className="w-4/5 mt-2">
      <CarouselContent>
        {Array(parseInt(slides?.imagesLength))
          .fill("")
          .map((_, i) => (
            <CarouselItem className="md:basis-1/2">
              <div className="p-2 h-44 relative rounded-lg" key={i}>
                <Image
                  key={i}
                  src={`/assets/slides/${slides.folder}/slide-${i + 1}.png`}
                  alt={`${slides.folder}-slide-${i + 1}`}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselUI;
