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

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const filterHook = useHotelFilters();
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  const applyFilters = () => {
    // This will trigger the hotel search with current filters
    console.log("Applying filters:", filterHook.filters);
    setIsFiltersApplied(true);
    
    // Add any additional logic here:
    // - Trigger hotel search API
    // - Show loading state
    // - Scroll to results
    // - Analytics tracking
  };

  const clearFilters = () => {
    filterHook.clearFilters();
    setIsFiltersApplied(false);
  };

  return (
    <FilterContext.Provider value={{ 
      ...filterHook, 
      applyFilters, 
      clearFilters,
      isFiltersApplied 
    }}>
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
