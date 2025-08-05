import { useState } from "react";
import { addDays } from "date-fns";

export interface FlightFilters {
  fromLocation: string | null;
  toLocation: string | null;
  departureDate?: Date;
  returnDate?: Date;
  tripType: "oneWay" | "roundTrip";
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabinClass: "economy" | "business" | "first";
  selectedAirlines: string[];
  priceRange: {
    min: number;
    max: number;
  };
  departureTimeRange: {
    min: string;
    max: string;
  };
  selectedPriceCategory:
    | "allCategories"
    | "lowest"
    | "highest"
    | "fastest"
    | "longest";
}

export const useFlightFilters = () => {
  const [filters, setFilters] = useState<FlightFilters>({
    fromLocation: null,
    toLocation: null,
    tripType: "roundTrip",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    cabinClass: "economy",
    selectedAirlines: [],
    priceRange: {
      min: 0,
      max: 1000000,
    },
    departureTimeRange: {
      min: "00:00",
      max: "23:59",
    },
    selectedPriceCategory: "allCategories",
  });

  const updateFilter = <K extends keyof FlightFilters>(
    key: K,
    value: FlightFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleDepartureDateSelect = (date: Date | undefined) => {
    updateFilter("departureDate", date);
    if (date && filters.returnDate && filters.returnDate <= date) {
      updateFilter("returnDate", undefined);
    }
  };

  const handleReturnDateSelect = (date: Date | undefined) => {
    updateFilter("returnDate", date);
    if (date && !filters.departureDate) {
      updateFilter("departureDate", addDays(date, -1));
    }
  };

  const handlePassengerChange = (
    type: "adults" | "children" | "infants",
    increment: boolean
  ) => {
    const current = filters.passengers[type];
    const minValue = type === "adults" ? 1 : 0;
    const maxValue = type === "infants" ? filters.passengers.adults : 9;

    if (increment && current < maxValue) {
      updateFilter("passengers", {
        ...filters.passengers,
        [type]: current + 1,
      });
    } else if (!increment && current > minValue) {
      updateFilter("passengers", {
        ...filters.passengers,
        [type]: current - 1,
      });
    }
  };

  const swapLocations = () => {
    const temp = filters.fromLocation;
    updateFilter("fromLocation", filters.toLocation);
    updateFilter("toLocation", temp);
  };

  const clearFilters = () => {
    setFilters({
      fromLocation: null,
      toLocation: null,
      tripType: "roundTrip",
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
      cabinClass: "economy",
      selectedAirlines: [],
      priceRange: {
        min: 0,
        max: 1000000,
      },
      departureTimeRange: {
        min: "00:00",
        max: "23:59",
      },
      selectedPriceCategory: "allCategories",
    });
  };

  return {
    filters,
    updateFilter,
    handleDepartureDateSelect,
    handleReturnDateSelect,
    handlePassengerChange,
    swapLocations,
    clearFilters,
  };
};
