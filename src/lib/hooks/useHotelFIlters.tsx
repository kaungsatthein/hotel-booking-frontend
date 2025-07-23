import { useState } from "react";
import { addDays } from "date-fns";

export interface HotelFilters {
  selectedState: string | null;
  selectedPriceCategory: string;
  selectedAmenities: string[];
  checkInDate?: Date;
  checkOutDate?: Date;
  adults: number;
  children: number;
  rooms: number;
}

export const useHotelFilters = () => {
  const [filters, setFilters] = useState<HotelFilters>({
    selectedState: null,
    selectedPriceCategory: "allCategories",
    selectedAmenities: [],
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const updateFilter = <K extends keyof HotelFilters>(
    key: K,
    value: HotelFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckInSelect = (date: Date | undefined) => {
    updateFilter("checkInDate", date);
    if (date && filters.checkOutDate && filters.checkOutDate <= date) {
      updateFilter("checkOutDate", undefined);
    }
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    updateFilter("checkOutDate", date);
    if (date && !filters.checkInDate) {
      updateFilter("checkInDate", addDays(date, -1));
    }
  };

  const handleGuestChange = (
    type: "adults" | "children" | "rooms",
    increment: boolean
  ) => {
    const current = filters[type];
    const minValue = type === "children" ? 0 : 1;

    if (increment) {
      updateFilter(type, current + 1);
    } else if (current > minValue) {
      updateFilter(type, current - 1);
    }
  };

  const clearFilters = () => {
    setFilters({
      selectedState: null,
      selectedPriceCategory: "allCategories",
      selectedAmenities: [],
      adults: 1,
      children: 0,
      rooms: 1,
    });
  };

  return {
    filters,
    updateFilter,
    handleCheckInSelect,
    handleCheckOutSelect,
    handleGuestChange,
    clearFilters,
  };
};
