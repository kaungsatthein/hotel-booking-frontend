import ImageCarousel from "./image-carousel";
import FilterBar from "./FilterBar";

const Hero = () => {
  return (
    <div className="relative">
      <ImageCarousel />
      <div
        className="
        absolute z-10 left-1/2 transform -translate-x-1/2
        top-1/3 lg:top-auto
        mt-[-50px]
      "
      >
        <FilterBar />
      </div>
    </div>
  );
};

export default Hero;
