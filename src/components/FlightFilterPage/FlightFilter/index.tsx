"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTranslations } from "next-intl";
import { LocationFilter } from "./LocationFilter";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";
import { DateRangeFilter } from "./DateRangeFilter";
import { PassengersFilter } from "./PassengersFilter";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { AirlinesFilter } from "./AirlinesFilter";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  PiggyBank,
  CalendarFold,
  Users,
  Plane,
} from "lucide-react";
import { useState } from "react";

const FlightFilter = () => {
  const t = useTranslations("FlightFilter");
  const { applyFilters, clearFilters } = useFlightFilterContext();

  // State to manage which sections are open
  const [openSections, setOpenSections] = useState({
    location: false,
    dateRange: false,
    passengers: false,
    priceRange: false,
    airlines: false,
  });

  // State to manage if the entire filter is collapsed
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const CollapsibleSection = ({
    sectionKey,
    title,
    icon: Icon,
    children,
  }: {
    sectionKey: keyof typeof openSections;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }) => (
    <Collapsible
      open={openSections[sectionKey]}
      onOpenChange={() => toggleSection(sectionKey)}
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 cursor-pointer rounded-md transition-colors">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="text-sm font-semibold">{title}</span>
        </div>
        {openSections[sectionKey] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="py-2">{children}</CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="w-full md:w-1/5 lg:w-1/5 pr-4 md:border-r-2">
      <Collapsible
        open={!isFilterCollapsed}
        onOpenChange={(open) => setIsFilterCollapsed(!open)}
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between mb-4 cursor-pointer rounded transition-colors">
            <span className="font-bold text-lg">Flight Filter</span>
            {isFilterCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-4">
            <CollapsibleSection
              sectionKey="location"
              title={t("Route")}
              icon={MapPin}
            >
              <LocationFilter />
            </CollapsibleSection>
            <Separator />

            <CollapsibleSection
              sectionKey="dateRange"
              title={t("Dates")}
              icon={CalendarFold}
            >
              <DateRangeFilter />
            </CollapsibleSection>
            <Separator />

            <CollapsibleSection
              sectionKey="passengers"
              title={t("Passengers")}
              icon={Users}
            >
              <PassengersFilter />
            </CollapsibleSection>
            <Separator />

            <CollapsibleSection
              sectionKey="priceRange"
              title={t("PriceRange")}
              icon={PiggyBank}
            >
              <PriceRangeFilter />
            </CollapsibleSection>
            <Separator />

            <CollapsibleSection
              sectionKey="airlines"
              title={t("Airlines")}
              icon={Plane}
            >
              <AirlinesFilter />
            </CollapsibleSection>

            <div className="mt-4 flex flex-col gap-2">
              <Button onClick={applyFilters}>{t("SearchFlights")}</Button>
              <Button variant="outline" onClick={clearFilters}>
                {t("ClearAll")}
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FlightFilter;
