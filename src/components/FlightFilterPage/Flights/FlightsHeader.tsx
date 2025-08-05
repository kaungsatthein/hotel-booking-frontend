"use client";

import { FilterBadges } from "@/components/common/filterBadge";
import { useFlightFilterBadges } from "@/lib/hooks/useFlightFilterBadges";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

interface FlightsHeaderProps {
  flightCount: number;
}

export const FlightsHeader = ({ flightCount }: FlightsHeaderProps) => {
  const { activeFilters, removeFilter, clearAllFilters } =
    useFlightFilterBadges();
  const { isFiltersApplied } = useFlightFilterContext();

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground">We found {flightCount} flights.</p>
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