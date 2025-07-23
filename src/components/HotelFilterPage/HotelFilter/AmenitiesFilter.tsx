"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Wifi, Coffee, Car, Waves, Snowflake } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFilterContext } from "@/contexts/HotelFilterContext";

const amenitiesOptions = [
  { id: "WiFi", translationKey: "WiFi", icon: Wifi },
  { id: "Breakfast", translationKey: "Breakfast", icon: Coffee },
  { id: "Pool", translationKey: "Pool", icon: Waves },
  { id: "Parking", translationKey: "Parking", icon: Car },
  { id: "AirCon", translationKey: "AirCon", icon: Snowflake },
];

export const AmenitiesFilter = () => {
  const t = useTranslations("HotelFilter");
  const { filters, updateFilter } = useFilterContext();

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    const currentAmenities = filters.selectedAmenities;
    let updatedAmenities;

    if (checked) {
      updatedAmenities = [...currentAmenities, amenityId];
    } else {
      updatedAmenities = currentAmenities.filter((id) => id !== amenityId);
    }

    updateFilter("selectedAmenities", updatedAmenities);
  };

  return (
    <div className="flex flex-col gap-3">
      {amenitiesOptions.map((amenity) => {
        const IconComponent = amenity.icon;
        return (
          <div key={amenity.id} className="flex items-center space-x-2">
            <Checkbox
              id={amenity.id}
              checked={filters.selectedAmenities.includes(amenity.id)}
              onCheckedChange={(checked) =>
                handleAmenityChange(amenity.id, checked === true)
              }
            />
            <div className="flex items-center gap-2">
              <IconComponent className="h-4 w-4" />
              <Label htmlFor={amenity.id} className="text-sm">
                {t(`AmenitiesOptions.${amenity.translationKey}`)}
              </Label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
