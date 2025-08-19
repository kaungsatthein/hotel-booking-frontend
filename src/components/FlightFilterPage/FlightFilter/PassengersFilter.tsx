"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

export const PassengersFilter = () => {
  const t = useTranslations("FlightFilter");
  const { filters, updateFilter, handlePassengerChange } =
    useFlightFilterContext();

  const PassengerCounter = ({
    label,
    description,
    type,
    count,
    min = 0,
    max = 9,
  }: {
    label: string;
    description?: string;
    type: "adults" | "children" | "infants";
    count: number;
    min?: number;
    max?: number;
  }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="font-medium text-sm">{label}</div>
        {description && (
          <div className="text-xs text-muted-foreground">{description}</div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePassengerChange(type, false)}
          disabled={count <= min}
          className="h-8 w-8 p-0"
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className="w-8 text-center text-sm font-medium">{count}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePassengerChange(type, true)}
          disabled={
            count >= max ||
            (type === "infants" && count >= filters.passengers.adults)
          }
          className="h-8 w-8 p-0"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Passengers */}
      <div>
        <div className="space-y-1">
          <PassengerCounter
            label={t("Adults")}
            description={t("Ages12OrAbove")}
            type="adults"
            count={filters.passengers.adults}
            min={1}
            max={9}
          />
          <PassengerCounter
            label={t("Children")}
            description={t("Ages2To11")}
            type="children"
            count={filters.passengers.children}
            min={0}
            max={9}
          />
          <PassengerCounter
            label={t("Infants")}
            description={t("Under2Years")}
            type="infants"
            count={filters.passengers.infants}
            min={0}
            max={filters.passengers.adults}
          />
        </div>
        {filters.passengers.infants > 0 && (
          <div className="text-xs text-muted-foreground mt-2">
            {t("InfantNote")}
          </div>
        )}
      </div>
    </div>
  );
};
