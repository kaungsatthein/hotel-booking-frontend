"use client";

import { HotelFilters, useHotelFilters } from "@/lib/hooks/useHotelFIlters";
import { createContext, useContext, ReactNode } from "react";

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
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const filterHook = useHotelFilters();

  const applyFilters = () => {
    // This will trigger the hotel search with current filters
    console.log("Applying filters:", filterHook.filters);
    // You can emit an event or call a callback here
  };

  return (
    <FilterContext.Provider value={{ ...filterHook, applyFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within FilterProvider");
  }
  return context;
};
