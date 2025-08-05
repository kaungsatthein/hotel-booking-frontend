import { ReactNode } from "react";
import { HotelFilterProvider } from "@/contexts/HotelFilterContext";
import { FlightFilterProvider } from "@/contexts/FlightFilterContext";

export const FilterProviders = ({ children }: { children: ReactNode }) => {
  return (
    <HotelFilterProvider>
      <FlightFilterProvider>{children}</FlightFilterProvider>
    </HotelFilterProvider>
  );
};
