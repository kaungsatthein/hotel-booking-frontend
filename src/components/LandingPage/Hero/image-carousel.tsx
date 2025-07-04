"use client";

import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1515900959941-d1cce424f5c4",
  "https://images.unsplash.com/photo-1519877428050-f51669c289d7",
  "https://images.unsplash.com/photo-1599905663349-0c5bec1cf94a",
];

const plugin = Autoplay({ delay: 6000 });

const ImageCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin]}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/14]  md:aspect-[16/10] lg:aspect-[16/6]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-none lg:rounded-2xl object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
