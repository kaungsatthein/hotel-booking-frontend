import CheckInCheckOut from "./checkin-checkout";
import Location from "./location";
import GuestSelector from "./guest-selector";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  return (
    <div className="bg-background/80 backdrop-blur-sm h-24 shadow-sm rounded-lg">
      <div className="flex items-center justify-center h-full gap-20">
        <Location />
        <CheckInCheckOut />
        <GuestSelector />
        <Button className="w-40">Search</Button>
      </div>
    </div>
  );
};

export default FilterBar;
