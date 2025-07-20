"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import { Bed, ChevronsUpDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../ui/command";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const locations = [
  {
    value: "yangon",
    label: "Yangon",
  },
  {
    value: "mandalay",
    label: "Mandalay",
  },
  {
    value: "naypyitaw",
    label: "Nay Pyi Taw",
  },
];

const FilterBar = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

  const t = useTranslations("FilterBar");

  return (
    <div className="flex items-center">
      <Bed className="w-5 h-5 mr-3 flex-shrink-0" />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {location
              ? locations.find((loc) => loc.value === location)?.label
              : `${t("SelectLocation")}`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search location..." className="h-9" />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((loc) => (
                  <CommandItem
                    key={loc.value}
                    value={loc.value}
                    onSelect={(currentValue) => {
                      setLocation(
                        currentValue === location ? "" : currentValue
                      );
                      setOpen(false);
                    }}
                  >
                    {loc.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        location === loc.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterBar;
