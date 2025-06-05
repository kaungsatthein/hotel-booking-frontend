"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Calendar as CalendarComponent } from "../../../ui/calendar";
import { Button } from "../../../ui/button";
import { Calendar } from "lucide-react";
import { format, addDays } from "date-fns";

const CheckInCheckOut = () => {
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckInDate(date);
    if (date && checkOutDate && checkOutDate <= date) {
      setCheckOutDate(undefined);
    }
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    setCheckOutDate(date);
    if (date && !checkInDate) {
      setCheckInDate(addDays(date, -1));
    }
  };

  const formatDateRange = () => {
    if (checkInDate && checkOutDate) {
      return `${format(checkInDate, "MMM dd")} — ${format(
        checkOutDate,
        "MMM dd"
      )}`;
    }
    if (checkInDate) {
      return `${format(checkInDate, "MMM dd")} — Select checkout`;
    }
    return "Check in - Check out date";
  };

  return (
    <div className="flex items-center">
      <Calendar className="w-5 h-5 mr-3" />
      <Popover open={isDatePopoverOpen} onOpenChange={setIsDatePopoverOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            {/* <Calendar className="w-5 h-5 mr-2" /> */}
            <span>{formatDateRange()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col sm:flex-row border rounded-lg">
            <div className="p-3">
              <div className="text-sm font-medium mb-2">Check-in</div>
              <CalendarComponent
                mode="single"
                selected={checkInDate}
                onSelect={handleCheckInSelect}
                disabled={(date) =>
                  date < new Date() ||
                  (checkOutDate ? date >= checkOutDate : false)
                }
                initialFocus
              />
            </div>
            <div className="p-3 border-t sm:border-t-0 sm:border-l">
              <div className="text-sm font-medium mb-2">Check-out</div>
              <CalendarComponent
                mode="single"
                selected={checkOutDate}
                onSelect={handleCheckOutSelect}
                disabled={(date) =>
                  date < (checkInDate || new Date()) ||
                  (checkInDate ? date <= checkInDate : false)
                }
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CheckInCheckOut;
