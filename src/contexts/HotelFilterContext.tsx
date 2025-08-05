"use client";

import { HotelFilters, useHotelFilters } from "@/lib/hooks/useHotelFIlters";
import { createContext, useContext, ReactNode, useState } from "react";

interface FilterContextType {
  filters: HotelFilters;
  updateFilter: <K extends keyof HotelFilters>(
    key: K,
    value: HotelFilters[K]
  ) => void;
  handleCheckInSelect: (date: Date | undefined) => void;
  handleCheckOutSelect: (date: Date | undefined) => void;
  handleGuestChange: (
    type: "adults" | "children" | "rooms",
    increment: boolean
  ) => void;
  clearFilters: () => void;
  applyFilters: () => void;
  isFiltersApplied: boolean;
}

const HotelFilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const HotelFilterProvider = ({ children }: { children: ReactNode }) => {
  const hotelFilters = useHotelFilters();
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  const applyFilters = () => {
    // This will trigger the hotel search with current filters
    console.log("Applying filters:", hotelFilters.filters);
    setIsFiltersApplied(true);

    // Add any additional logic here:
    // - Trigger hotel search API
    // - Show loading state
    // - Scroll to results
    // - Analytics tracking
  };

  const clearFilters = () => {
    hotelFilters.clearFilters();
    setIsFiltersApplied(false);
  };

  return (
    <HotelFilterContext.Provider
      value={{
        ...hotelFilters,
        applyFilters,
        clearFilters,
        isFiltersApplied,
      }}
    >
      {children}
    </HotelFilterContext.Provider>
  );
};

export const useHotelFilterContext = () => {
  const context = useContext(HotelFilterContext);
  if (!context) {
    throw new Error(
      "useHotelFilterContext must be used within HotelFilterProvider"
    );
  }
  return context;
};
