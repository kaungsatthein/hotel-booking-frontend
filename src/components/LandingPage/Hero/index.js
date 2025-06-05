import ImageCarousel from "./image-carousel";
import FilterBar from "./FilterBar";

const Hero = () => {
  return (
    <div className="relative">
      <ImageCarousel />
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-[-50] w-full max-w-7xl">
        <FilterBar />
      </div>
    </div>
  );
};

export default Hero;
