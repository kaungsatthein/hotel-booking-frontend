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
import { myanmarStates } from "@/constants/myanmarStates";
import { useHotelFilterContext } from "@/contexts/HotelFilterContext";

export const LocationFilter = () => {
  const t = useTranslations("HotelFilter");
  const { filters, updateFilter } = useHotelFilterContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {filters.selectedState
            ? t(`States.${filters.selectedState}`)
            : t("SelectLocation")}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-popover" align="start">
        <DropdownMenuGroup>
          {myanmarStates.map((state) => (
            <DropdownMenuItem
              key={state}
              onClick={() => updateFilter("selectedState", state)}
            >
              {t(`States.${state}`)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
