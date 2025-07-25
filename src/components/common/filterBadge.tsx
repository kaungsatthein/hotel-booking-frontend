"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface FilterItem {
  type: string;
  label: string;
  value: string | number;
}

export interface FilterActions {
  removeFilter: (filterType: string, filterValue: string) => void;
  clearAllFilters: () => void;
}

export interface FilterBadgeProps {
  activeFilters: FilterItem[];
  onRemoveFilter: (filterType: string, filterValue: string) => void;
  onClearAll: () => void;
  showClearAll?: boolean;
}

export const FilterBadges = ({
  activeFilters,
  onRemoveFilter,
  onClearAll,
  showClearAll = true,
}: FilterBadgeProps) => {
  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {activeFilters.map((filter, index) => (
        <Badge
          key={`${filter.type}-${index}`}
          variant="secondary"
          className="flex items-center gap-1"
        >
          <span className="text-xs">{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.type, filter.value.toString())}
            className="ml-1 cursor-pointer rounded-full p-0.5 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      {showClearAll && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Clear All
        </Button>
      )}
    </div>
  );
};
