"use client";

import { Button } from "@/components/ui/button";
import { useFilterContext } from "@/contexts/HotelFilterContext";
import { Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface CounterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  disabled?: boolean;
}

const Counter = ({
  label,
  value,
  onIncrement,
  onDecrement,
  disabled,
}: CounterProps) => (
  <div className="flex items-center justify-between">
    <span className="text-sm">{label}</span>
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={onDecrement}
        disabled={disabled}
      >
        -
      </Button>
      <span className="w-8 text-center text-sm">{value}</span>
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={onIncrement}
      >
        +
      </Button>
    </div>
  </div>
);

export const GuestsRoomsFilter = () => {
  const t = useTranslations("HotelFilter");
  const { filters, handleGuestChange } = useFilterContext();

  return (
    <div className="flex flex-col gap-3">
      <Counter
        label={t("Adults")}
        value={filters.adults}
        onIncrement={() => handleGuestChange("adults", true)}
        onDecrement={() => handleGuestChange("adults", false)}
        disabled={filters.adults <= 1}
      />
      <Counter
        label={t("Children")}
        value={filters.children}
        onIncrement={() => handleGuestChange("children", true)}
        onDecrement={() => handleGuestChange("children", false)}
        disabled={filters.children <= 0}
      />
      <Counter
        label={t("Rooms")}
        value={filters.rooms}
        onIncrement={() => handleGuestChange("rooms", true)}
        onDecrement={() => handleGuestChange("rooms", false)}
        disabled={filters.rooms <= 1}
      />
    </div>
  );
};
