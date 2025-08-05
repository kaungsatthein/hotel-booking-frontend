"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

const airports = [
  { code: "RGN", name: "Yangon", city: "Yangon" },
  { code: "MDL", name: "Mandalay", city: "Mandalay" },
  { code: "NYT", name: "Naypyitaw", city: "Naypyitaw" },
  { code: "THL", name: "Thandwe", city: "Thandwe" },
  { code: "KYP", name: "Kyaukpyu", city: "Kyaukpyu" },
  { code: "LSH", name: "Lashio", city: "Lashio" },
  { code: "MYT", name: "Myitkyina", city: "Myitkyina" },
];

export const LocationFilter = () => {
  const t = useTranslations("FlightFilter");
  const { filters, updateFilter } = useFlightFilterContext();

  const getAirportDisplay = (code: string | null) => {
    if (!code) return null;
    const airport = airports.find((a) => a.code === code);
    return airport ? `${airport.city} (${airport.code})` : code;
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <label className="text-sm font-medium mb-1 block">{t("From")}</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {getAirportDisplay(filters.fromLocation) ||
                  t("SelectDeparture")}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-popover" align="start">
              <DropdownMenuGroup>
                {airports.map((airport) => (
                  <DropdownMenuItem
                    key={airport.code}
                    onClick={() => updateFilter("fromLocation", airport.code)}
                  >
                    {airport.city} ({airport.code})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-1 block">{t("To")}</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {getAirportDisplay(filters.toLocation) ||
                  t("SelectDestination")}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-popover" align="start">
              <DropdownMenuGroup>
                {airports
                  .filter((airport) => airport.code !== filters.fromLocation)
                  .map((airport) => (
                    <DropdownMenuItem
                      key={airport.code}
                      onClick={() => updateFilter("toLocation", airport.code)}
                    >
                      {airport.city} ({airport.code})
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
