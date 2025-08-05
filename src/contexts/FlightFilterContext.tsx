"use client";

import { FlightFilters, useFlightFilters } from "@/lib/hooks/useFlightFilters";
import { createContext, useContext, ReactNode, useState } from "react";

interface FlightFilterContextType {
  filters: FlightFilters;
  updateFilter: <K extends keyof FlightFilters>(
    key: K,
    value: FlightFilters[K]
  ) => void;
  handleDepartureDateSelect: (date: Date | undefined) => void;
  handleReturnDateSelect: (date: Date | undefined) => void;
  handlePassengerChange: (
    type: "adults" | "children" | "infants",
    increment: boolean
  ) => void;
  swapLocations: () => void;
  clearFilters: () => void;
  applyFilters: () => void;
  isFiltersApplied: boolean;
}

const FlightFilterContext = createContext<FlightFilterContextType | undefined>(
  undefined
);

export const FlightFilterProvider = ({ children }: { children: ReactNode }) => {
  const flightFilters = useFlightFilters();
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  const applyFilters = () => {
    // This will trigger the flight search with current filters
    console.log("Applying flight filters:", flightFilters.filters);
    setIsFiltersApplied(true);

    // Add any additional logic here:
    // - Trigger flight search API
    // - Show loading state
    // - Scroll to results
    // - Analytics tracking
  };

  const clearFilters = () => {
    flightFilters.clearFilters();
    setIsFiltersApplied(false);
  };

  return (
    <FlightFilterContext.Provider
      value={{
        ...flightFilters,
        applyFilters,
        clearFilters,
        isFiltersApplied,
      }}
    >
      {children}
    </FlightFilterContext.Provider>
  );
};

export const useFlightFilterContext = () => {
  const context = useContext(FlightFilterContext);
  if (!context) {
    throw new Error(
      "useFlightFilterContext must be used within FlightFilterProvider"
    );
  }
  return context;
};