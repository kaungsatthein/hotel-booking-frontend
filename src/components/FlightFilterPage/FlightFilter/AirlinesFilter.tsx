"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

const airlines = [
  { code: "8M", name: "Myanmar Airways International" },
  { code: "UB", name: "Myanmar National Airlines" },
  { code: "K7", name: "Air KBZ" },
  { code: "YJ", name: "Asian Wings Airways" },
  { code: "Y5", name: "Golden Myanmar Airlines" },
  { code: "FMI", name: "FMI Air" },
];


export const AirlinesFilter = () => {
  const t = useTranslations("FlightFilter");
  const { filters, updateFilter } = useFlightFilterContext();

  const handleAirlineToggle = (airlineCode: string, checked: boolean) => {
    const currentAirlines = filters.selectedAirlines;
    if (checked) {
      updateFilter("selectedAirlines", [...currentAirlines, airlineCode]);
    } else {
      updateFilter(
        "selectedAirlines",
        currentAirlines.filter((code) => code !== airlineCode)
      );
    }
  };

  const handleSelectAllAirlines = () => {
    if (filters.selectedAirlines.length === airlines.length) {
      // Deselect all
      updateFilter("selectedAirlines", []);
    } else {
      // Select all
      updateFilter(
        "selectedAirlines",
        airlines.map((a) => a.code)
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Airlines Selection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">{t("Airlines")}</label>
          <button onClick={handleSelectAllAirlines} className="text-xs  ">
            {filters.selectedAirlines.length === airlines.length
              ? t("DeselectAll")
              : t("SelectAll")}
          </button>
        </div>
        <div className="space-y-2">
          {airlines.map((airline) => (
            <div key={airline.code} className="flex items-center space-x-2">
              <Checkbox
                id={airline.code}
                checked={filters.selectedAirlines.includes(airline.code)}
                onCheckedChange={(checked) =>
                  handleAirlineToggle(airline.code, checked as boolean)
                }
              />
              <Label htmlFor={airline.code} className="text-sm flex-1">
                <div className="font-medium">{airline.name}</div>
                <div className="text-xs text-muted-foreground">
                  {airline.code}
                </div>
              </Label>
            </div>
          ))}
        </div>
        {filters.selectedAirlines.length > 0 && (
          <div className="text-xs text-muted-foreground mt-2">
            {t("AirlinesSelected", { count: filters.selectedAirlines.length })}
          </div>
        )}
      </div>
    </div>
  );
};
