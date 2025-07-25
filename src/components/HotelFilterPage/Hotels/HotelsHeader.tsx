"use client";

import { FilterBadges } from "@/components/common/filterBadge";
import { useHotelFilterBadges } from "@/lib/hooks/useHotelFilterBadges";

interface HotelsHeaderProps {
  hotelCount: number;
}

export const HotelsHeader = ({ hotelCount }: HotelsHeaderProps) => {
  const { activeFilters, removeFilter, clearAllFilters } =
    useHotelFilterBadges();
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-muted-foreground">We found {hotelCount} hotels.</p>
      <FilterBadges
        activeFilters={activeFilters}
        onRemoveFilter={removeFilter}
        onClearAll={clearAllFilters}
      />
    </div>
  );
};
