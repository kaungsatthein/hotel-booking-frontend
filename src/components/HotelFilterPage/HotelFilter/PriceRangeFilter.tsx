"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useFilterContext } from "@/contexts/HotelFilterContext";

const priceCategories = [
  { value: "allCategories", translationKey: "AllCategories" },
  { value: "budget", translationKey: "Budget" },
  { value: "midRange", translationKey: "MidRange" },
  { value: "luxury", translationKey: "Luxury" },
];

export const PriceRangeFilter = () => {
  const t = useTranslations("HotelFilter");
  const { filters, updateFilter } = useFilterContext();

  const handlePriceCategoryChange = (value: string) => {
    updateFilter("selectedPriceCategory", value);
  };

  return (
    <RadioGroup
      value={filters.selectedPriceCategory}
      onValueChange={handlePriceCategoryChange}
    >
      {priceCategories.map((category) => (
        <div key={category.value} className="flex items-center space-x-2">
          <RadioGroupItem value={category.value} id={category.value} />
          <Label htmlFor={category.value} className="text-sm">
            {t(`PriceCategories.${category.translationKey}`)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
