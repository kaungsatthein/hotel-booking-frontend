"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import { Users } from "lucide-react";
import { useTranslations } from "next-intl";

const GuestSelector = () => {
  const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const t = useTranslations("FilterBar");

  const formatGuests = () => {
    const guestText = `${adults + children} ${t("Guest")}`;
    const roomText = `${rooms} ${t("Room")}`;
    return `${guestText} · ${roomText}`;
  };

  return (
    <div className="flex items-center">
      <Users className="w-5 h-5 mr-3 flex-shrink-0" />
      <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className=" min-w-[180px] justify-between">
            <span>{formatGuests()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="start">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{t("Adults")}</div>
                <div className="text-sm text-muted-foreground">
                  {t("Ages13OrAbove")}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{adults}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setAdults(Math.min(adults + 1))}
                  // disabled={adults >= 8}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{t("Children")}</div>
                <div className="text-sm text-muted-foreground">{t("Ages0To12")}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children <= 0}
                >
                  -
                </Button>
                <span className="w-8 text-center">{children}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setChildren(Math.min(children + 1))}
                  // disabled={children >= 6}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{t("Room")}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  disabled={rooms <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{rooms}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setRooms(Math.min(rooms + 1))}
                  // disabled={rooms >= 10}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default GuestSelector;
