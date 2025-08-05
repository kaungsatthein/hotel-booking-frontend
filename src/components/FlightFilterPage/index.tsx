import FlightFilter from "./FlightFilter";
import Flights from "./Flights";

const FlightFilterPage = () => {
  return (
    <div className="px-4 py-4 lg:px-8 lg:py-6">
      <div className="flex flex-col md:flex-row gap-4">
        <FlightFilter />
        <Flights />
      </div>
    </div>
  );
};

export default FlightFilterPage;
