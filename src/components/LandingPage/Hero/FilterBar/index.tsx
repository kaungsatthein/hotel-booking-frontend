import CheckInCheckOut from "./checkin-checkout";
import Location from "./location";
import GuestSelector from "./guest-selector";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  return (
    <div className="bg-background/80 backdrop-blur-sm shadow-sm rounded-lg  mx-auto">
      <div className="flex flex-col gap-4 lg:gap-5 lg:flex-row items-start md:p-5 p-8 lg:items-center justify-center">
        <Location />
        <CheckInCheckOut />
        <GuestSelector />
        <Button className="lg:w-40 w-full">Search</Button>
      </div>
    </div>
  );
};

export default FilterBar;
