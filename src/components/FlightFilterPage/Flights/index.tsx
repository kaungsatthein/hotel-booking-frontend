import { getTranslations } from "next-intl/server";
import FlightsView from "./FlightsView";

const Flights = async () => {
  const t = await getTranslations("FlightFilter");
  return (
    <div className="w-full">
      <span className="text-lg font-semibold">{t("SearchFlights")}</span>
      <FlightsView />
    </div>
  );
};

export default Flights;
