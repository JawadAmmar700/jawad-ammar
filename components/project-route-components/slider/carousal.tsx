"use client";
import Image from "next/image";
import Slider from "react-slick";
import NextArrow from "./next-arrow";
import PrevArrow from "./prev-arrow";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Carousal({ slides }: { slides: Slides }) {
  return (
    <section className="mt-16 relative flex items-center justify-center flex-col space-y-4 mb-32">
      <div className="w-4/5">
        <Slider {...settings}>
          {Array(parseInt(slides?.imagesLength))
            .fill("")
            .map((_, i) => (
              <div className="p-2 h-[450px] relative rounded-lg">
                <Image
                  key={i}
                  src={`/assets/slides/${slides.folder}/slide-${i + 1}.png`}
                  alt={`${slides.folder}-slide-${i + 1}`}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
