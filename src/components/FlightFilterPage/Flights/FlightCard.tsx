"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plane, Users } from "lucide-react";
import { Flight } from "./FlightsView";
import { useRouter } from "next/navigation";

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
  const router = useRouter();
  const handleBookFlight = () => {
    // Handle flight booking logic
    console.log("Booking flight:", flight.id);
  };

  const handleViewDetails = () => {
    router.push(`/flights/${flight.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent>
        <div className="flex flex-col gap-6">
          {/* Flight Info Section */}
          <div className="flex-1 space-y-6">
            {/* Airline and Flight Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{flight.airline}</h3>
                  <p className="text-sm text-muted-foreground">
                    {flight.airlineCode} {flight.flightNumber} •{" "}
                    {flight.aircraft}
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="text-lg font-semibold px-3 py-1"
              >
                ${flight.price} {flight.currency}
              </Badge>
            </div>

            {/* Route and Time */}
            <div className="flex items-center justify-between">
              {/* Departure */}
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {flight.departure.time}
                </div>
                <div className="text-sm font-medium">
                  {flight.departure.code}
                </div>
                <div className="text-xs text-muted-foreground">
                  {flight.departure.city}
                </div>
              </div>

              {/* Flight Path */}
              <div className="flex-1 mx-6">
                <div className="flex items-center justify-center relative">
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="mx-2 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Plane className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {flight.duration}
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
              </div>

              {/* Arrival */}
              <div className="text-center">
                <div className="text-2xl font-bold">{flight.arrival.time}</div>
                <div className="text-sm font-medium">{flight.arrival.code}</div>
                <div className="text-xs text-muted-foreground">
                  {flight.arrival.city}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{flight.availableSeats} seats left</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-xs">
                  {flight.cabinClass}
                </Badge>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Button className="w-full" onClick={handleBookFlight}>
              Book Flight
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleViewDetails}
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
