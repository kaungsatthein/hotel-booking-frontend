import { useFlightFilterContext } from "@/contexts/FlightFilterContext";
import { useTranslations } from "next-intl";
import { FilterItem } from "@/components/common/filterBadge";

export const useFlightFilterBadges = () => {
  const { filters, updateFilter, clearFilters } = useFlightFilterContext();
  const t = useTranslations("FlightFilter");

  const getActiveFilters = (): FilterItem[] => {
    const activeFilters: FilterItem[] = [];

    // Route filter (From/To locations)
    if (filters.fromLocation && filters.toLocation) {
      activeFilters.push({
        type: "route",
        label: `${filters.fromLocation} → ${filters.toLocation}`,
        value: "route",
      });
    }

    // Trip type filter
    if (filters.tripType === "oneWay") {
      activeFilters.push({
        type: "tripType",
        label: t("OneWay"),
        value: "oneWay",
      });
    }

    // Price category filter
    if (
      filters.selectedPriceCategory &&
      filters.selectedPriceCategory !== "allCategories"
    ) {
      activeFilters.push({
        type: "priceCategory",
        label: t(
          `PriceCategories.${
            filters.selectedPriceCategory.charAt(0).toUpperCase() +
            filters.selectedPriceCategory.slice(1)
          }`
        ),
        value: filters.selectedPriceCategory,
      });
    }

    // Cabin class filter
    if (filters.cabinClass !== "economy") {
      activeFilters.push({
        type: "cabinClass",
        label: t(
          filters.cabinClass.charAt(0).toUpperCase() +
            filters.cabinClass.slice(1)
        ),
        value: filters.cabinClass,
      });
    }

    // Airlines filter
    if (filters.selectedAirlines.length > 0) {
      filters.selectedAirlines.forEach((airline) => {
        activeFilters.push({
          type: "airline",
          label: airline,
          value: airline,
        });
      });
    }

    // Passenger information
    const totalPassengers =
      filters.passengers.adults +
      filters.passengers.children +
      filters.passengers.infants;
    if (
      totalPassengers > 1 ||
      filters.passengers.children > 0 ||
      filters.passengers.infants > 0
    ) {
      const passengerInfo = [];
      if (filters.passengers.adults > 1)
        passengerInfo.push(`${filters.passengers.adults} ${t("Adults")}`);
      if (filters.passengers.children > 0)
        passengerInfo.push(`${filters.passengers.children} ${t("Children")}`);
      if (filters.passengers.infants > 0)
        passengerInfo.push(`${filters.passengers.infants} ${t("Infants")}`);

      activeFilters.push({
        type: "passengers",
        label: passengerInfo.join(", "),
        value: "passengers",
      });
    }

    // Date range
    if (filters.departureDate) {
      const departureDate = filters.departureDate.toLocaleDateString();
      let dateLabel = `${t("DepartureDate")}: ${departureDate}`;

      if (filters.tripType === "roundTrip" && filters.returnDate) {
        const returnDate = filters.returnDate.toLocaleDateString();
        dateLabel += ` | ${t("ReturnDate")}: ${returnDate}`;
      }

      activeFilters.push({
        type: "dateRange",
        label: dateLabel,
        value: "dateRange",
      });
    }

    return activeFilters;
  };

  const removeFilter = (filterType: string, filterValue: string) => {
    switch (filterType) {
      case "route":
        updateFilter("fromLocation", "");
        updateFilter("toLocation", "");
        break;
      case "tripType":
        updateFilter("tripType", "roundTrip");
        break;
      case "priceCategory":
        updateFilter("selectedPriceCategory", "allCategories");
        break;
      case "cabinClass":
        updateFilter("cabinClass", "economy");
        break;
      case "airline":
        const updatedAirlines = filters.selectedAirlines.filter(
          (airline) => airline !== filterValue
        );
        updateFilter("selectedAirlines", updatedAirlines);
        break;
      case "passengers":
        updateFilter("passengers", {
          adults: 1,
          children: 0,
          infants: 0,
        });
        break;
      case "dateRange":
        updateFilter("departureDate", undefined);
        updateFilter("returnDate", undefined);
        break;
    }
  };

  const clearAllFilters = () => {
    updateFilter("fromLocation", "");
    updateFilter("toLocation", "");
    updateFilter("tripType", "roundTrip");
    updateFilter("selectedPriceCategory", "allCategories");
    updateFilter("cabinClass", "economy");
    updateFilter("selectedAirlines", []);
    updateFilter("passengers", {
      adults: 1,
      children: 0,
      infants: 0,
    });
    updateFilter("departureDate", undefined);
    updateFilter("returnDate", undefined);
    clearFilters();
  };

  return {
    activeFilters: getActiveFilters(),
    removeFilter,
    clearAllFilters,
  };
};
