import CheckInCheckOut from "./checkin-checkout";
import Location from "./location";
import GuestSelector from "./guest-selector";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  return (
    <div className="bg-background/80 backdrop-blur-sm h-24 shadow-sm rounded-lg max-w-6xl mx-auto">
      <div className="flex items-center justify-center h-full gap-10">
        <Location />
        <CheckInCheckOut />
        <GuestSelector />
        <Button className="w-40">Search</Button>
      </div>
    </div>
  );
};

export default FilterBar;
