"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { CalendarDays, CalendarFold, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { useFilterContext } from "@/contexts/HotelFilterContext";

export const DateRangeFilter = () => {
  const t = useTranslations("HotelFilter");
  const { filters, handleCheckInSelect, handleCheckOutSelect } =
    useFilterContext();

  const formatDate = (date: Date | undefined) => {
    return date ? format(date, "MMM dd, yyyy") : t("SelectDate");
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Check-in button */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>
                {t("CheckIn")}: {formatDate(filters.checkInDate)}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={filters.checkInDate}
            onSelect={handleCheckInSelect}
            disabled={(date) =>
              date < new Date() ||
              (filters.checkOutDate ? date >= filters.checkOutDate : false)
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Check-out button */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>
                {t("CheckOut")}: {formatDate(filters.checkOutDate)}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={filters.checkOutDate}
            onSelect={handleCheckOutSelect}
            disabled={(date) =>
              date < (filters.checkInDate || new Date()) ||
              (filters.checkInDate ? date <= filters.checkInDate : false)
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
