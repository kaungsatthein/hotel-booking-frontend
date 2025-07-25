import { FilterProvider } from "@/contexts/HotelFilterContext";
import HotelFilter from "./HotelFilter";
import Hotels from "./Hotels";

const HotelFilterPage = () => {
  return (
    <div className="px-4 py-4 lg:px-8 lg:py-6">
      <div className="flex flex-col md:flex-row gap-4">
        <FilterProvider>
          <HotelFilter />
          <Hotels />
        </FilterProvider>
      </div>
    </div>
  );
};

export default HotelFilterPage;
