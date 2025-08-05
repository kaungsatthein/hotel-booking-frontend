"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

export const DateRangeFilter = () => {
  const t = useTranslations("FlightFilter");
  const {
    filters,
    updateFilter,
    handleDepartureDateSelect,
    handleReturnDateSelect,
  } = useFlightFilterContext();

  return (
    <div className="space-y-4">
      {/* Trip Type Selection */}
      <div>
        <label className="text-sm font-medium mb-2 block">{t("TripType")}</label>
        <RadioGroup
          value={filters.tripType}
          onValueChange={(value: "oneWay" | "roundTrip") =>
            updateFilter("tripType", value)
          }
          className="flex gap-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip">{t("RoundTrip")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay">{t("OneWay")}</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Departure Date */}
      <div>
        <label className="text-sm font-medium mb-1 block">{t("DepartureDate")}</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.departureDate
                ? format(filters.departureDate, "PPP")
                : t("SelectDepartureDate")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={filters.departureDate}
              onSelect={handleDepartureDateSelect}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Return Date - Only show for round trip */}
      {filters.tripType === "roundTrip" && (
        <div>
          <label className="text-sm font-medium mb-1 block">{t("ReturnDate")}</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.returnDate
                  ? format(filters.returnDate, "PPP")
                  : t("SelectReturnDate")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={filters.returnDate}
                onSelect={handleReturnDateSelect}
                disabled={(date) =>
                  date < new Date() ||
                  (filters.departureDate
                    ? date <= filters.departureDate
                    : false)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};
