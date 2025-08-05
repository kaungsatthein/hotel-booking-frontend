"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useFlightFilterContext } from "@/contexts/FlightFilterContext";

const priceCategories = [
  {
    value: "allCategories",
    translationKey: "AllCategories",
    min: 0,
    max: 2000000,
  },
  { value: "budget", translationKey: "Budget", min: 0, max: 200000 },
  { value: "midRange", translationKey: "MidRange", min: 200000, max: 500000 },
  { value: "premium", translationKey: "Premium", min: 500000, max: 1000000 },
  { value: "luxury", translationKey: "Luxury", min: 1000000, max: 2000000 },
];

export const PriceRangeFilter = () => {
  const t = useTranslations("FlightFilter");
  const { filters, updateFilter } = useFlightFilterContext();

  const handlePriceCategoryChange = (value: string) => {
    const category = priceCategories.find((c) => c.value === value);
    if (category) {
      updateFilter("priceRange", {
        min: category.min,
        max: category.max,
      });
    }
  };

  // Find current selected category based on price range
  const getCurrentCategory = () => {
    const currentCategory = priceCategories.find(
      (cat) =>
        cat.min === filters.priceRange.min && cat.max === filters.priceRange.max
    );
    return currentCategory?.value || "allCategories";
  };

  return (
    <RadioGroup
      value={getCurrentCategory()}
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
