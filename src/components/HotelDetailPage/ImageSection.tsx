import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const hotelImages = [
  "https://images.unsplash.com/photo-1583435292794-4803a56c5043",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
];

const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

const ImageSection = () => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin]}
        className="w-full"
      >
        <CarouselContent>
          {hotelImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  fill
                  alt={`Hotel Image ${index + 1}`}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ImageSection;
