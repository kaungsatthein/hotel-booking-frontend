import { useFilterContext } from "@/contexts/HotelFilterContext";
import { useTranslations } from "next-intl";
import { FilterItem } from "@/components/common/filterBadge";

export const useHotelFilterBadges = () => {
  const { filters, updateFilter } = useFilterContext();
  const t = useTranslations("HotelFilter");

  const getActiveFilters = (): FilterItem[] => {
    const activeFilters: FilterItem[] = [];

    // Location filter
    if (filters.selectedState) {
      activeFilters.push({
        type: "location",
        label: t(`States.${filters.selectedState}`),
        value: filters.selectedState,
      });
    }

    // Price category filter
    if (
      filters.selectedPriceCategory &&
      filters.selectedPriceCategory !== "allCategories"
    ) {
      activeFilters.push({
        type: "priceCategory",
        label: t(
          `PriceCategories.${
            filters.selectedPriceCategory.charAt(0).toUpperCase() +
            filters.selectedPriceCategory.slice(1)
          }`
        ),
        value: filters.selectedPriceCategory,
      });
    }

    // Amenities filter
    filters.selectedAmenities.forEach((amenity) => {
      activeFilters.push({
        type: "amenity",
        label: amenity,
        value: amenity,
      });
    });

    // Guest information
    if (filters.adults > 1 || filters.children > 0 || filters.rooms > 1) {
      const guestInfo = [];
      if (filters.adults > 1) guestInfo.push(`${filters.adults} Adults`);
      if (filters.children > 0) guestInfo.push(`${filters.children} Children`);
      if (filters.rooms > 1) guestInfo.push(`${filters.rooms} Rooms`);

      activeFilters.push({
        type: "guests",
        label: guestInfo.join(", "),
        value: "guests",
      });
    }

    // Date range
    if (filters.checkInDate && filters.checkOutDate) {
      const checkIn = filters.checkInDate.toLocaleDateString();
      const checkOut = filters.checkOutDate.toLocaleDateString();
      activeFilters.push({
        type: "dateRange",
        label: `${checkIn} - ${checkOut}`,
        value: "dateRange",
      });
    }

    return activeFilters;
  };

  const removeFilter = (filterType: string, filterValue: string) => {
    switch (filterType) {
      case "location":
        updateFilter("selectedState", null);
        break;
      case "priceCategory":
        updateFilter("selectedPriceCategory", "allCategories");
        break;
      case "amenity":
        const updatedAmenities = filters.selectedAmenities.filter(
          (amenity) => amenity !== filterValue
        );
        updateFilter("selectedAmenities", updatedAmenities);
        break;
      case "guests":
        updateFilter("adults", 1);
        updateFilter("children", 0);
        updateFilter("rooms", 1);
        break;
      case "dateRange":
        updateFilter("checkInDate", undefined);
        updateFilter("checkOutDate", undefined);
        break;
    }
  };

  const clearAllFilters = () => {
    updateFilter("selectedState", null);
    updateFilter("selectedPriceCategory", "allCategories");
    updateFilter("selectedAmenities", []);
    updateFilter("adults", 1);
    updateFilter("children", 0);
    updateFilter("rooms", 1);
    updateFilter("checkInDate", undefined);
    updateFilter("checkOutDate", undefined);
  };

  return {
    activeFilters: getActiveFilters(),
    removeFilter,
    clearAllFilters,
  };
};
