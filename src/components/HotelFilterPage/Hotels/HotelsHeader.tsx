"use client";

import { FilterBadges } from "@/components/common/filterBadge";
import { useHotelFilterBadges } from "@/lib/hooks/useHotelFilterBadges";
import { useFilterContext } from "@/contexts/HotelFilterContext";

interface HotelsHeaderProps {
  hotelCount: number;
}

export const HotelsHeader = ({ hotelCount }: HotelsHeaderProps) => {
  const { activeFilters, removeFilter, clearAllFilters } =
    useHotelFilterBadges();
  const { isFiltersApplied } = useFilterContext();

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground">We found {hotelCount} hotels.</p>
      </div>
      {isFiltersApplied && activeFilters.length > 0 && (
        <FilterBadges
          activeFilters={activeFilters}
          onRemoveFilter={removeFilter}
          onClearAll={clearAllFilters}
        />
      )}
    </div>
  );
};
