"use client";

import { Button } from "@/components/ui/button";
import { FlightsHeader } from "./FlightsHeader";
import { FlightCard } from "./FlightCard";

export interface Flight {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departure: {
    airport: string;
    city: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    city: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  stops: number;
  stopDetails?: string[];
  price: number;
  currency: string;
  cabinClass: string;
  availableSeats: number;
  aircraft: string;
}

const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "Myanmar Airways International",
    airlineCode: "8M",
    flightNumber: "8M335",
    departure: {
      airport: "Yangon International Airport",
      city: "Yangon",
      code: "RGN",
      time: "08:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Mandalay International Airport",
      city: "Mandalay",
      code: "MDL",
      time: "09:45",
      date: "2024-01-15",
    },
    duration: "1h 15m",
    stops: 0,
    price: 120,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 45,
    aircraft: "ATR 72",
  },
  {
    id: "2",
    airline: "Air KBZ",
    airlineCode: "K7",
    flightNumber: "K7242",
    departure: {
      airport: "Yangon International Airport",
      city: "Yangon",
      code: "RGN",
      time: "14:20",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Mandalay International Airport",
      city: "Mandalay",
      code: "MDL",
      time: "15:35",
      date: "2024-01-15",
    },
    duration: "1h 15m",
    stops: 0,
    price: 135,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 28,
    aircraft: "ATR 72",
  },
  {
    id: "3",
    airline: "Myanmar National Airlines",
    airlineCode: "UB",
    flightNumber: "UB505",
    departure: {
      airport: "Yangon International Airport",
      city: "Yangon",
      code: "RGN",
      time: "16:45",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Naypyitaw Airport",
      city: "Naypyitaw",
      code: "NYT",
      time: "17:30",
      date: "2024-01-15",
    },
    duration: "45m",
    stops: 0,
    price: 95,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 52,
    aircraft: "Embraer E190",
  },
  {
    id: "4",
    airline: "Asian Wings Airways",
    airlineCode: "YJ",
    flightNumber: "YJ201",
    departure: {
      airport: "Yangon International Airport",
      city: "Yangon",
      code: "RGN",
      time: "10:15",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Thandwe Airport",
      city: "Thandwe",
      code: "THL",
      time: "11:00",
      date: "2024-01-15",
    },
    duration: "45m",
    stops: 0,
    price: 180,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 18,
    aircraft: "ATR 42",
  },
  {
    id: "5",
    airline: "Golden Myanmar Airlines",
    airlineCode: "Y5",
    flightNumber: "Y5234",
    departure: {
      airport: "Mandalay International Airport",
      city: "Mandalay",
      code: "MDL",
      time: "07:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Myitkyina Airport",
      city: "Myitkyina",
      code: "MYT",
      time: "08:45",
      date: "2024-01-15",
    },
    duration: "1h 15m",
    stops: 0,
    price: 165,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 32,
    aircraft: "ATR 72",
  },
  {
    id: "6",
    airline: "FMI Air",
    airlineCode: "FMI",
    flightNumber: "FMI108",
    departure: {
      airport: "Yangon International Airport",
      city: "Yangon",
      code: "RGN",
      time: "12:00",
      date: "2024-01-15",
    },
    arrival: {
      airport: "Lashio Airport",
      city: "Lashio",
      code: "LSH",
      time: "14:30",
      date: "2024-01-15",
    },
    duration: "2h 30m",
    stops: 1,
    stopDetails: ["Mandalay (MDL) - 30min layover"],
    price: 145,
    currency: "USD",
    cabinClass: "Economy",
    availableSeats: 24,
    aircraft: "ATR 42",
  },
];

const FlightsView = () => {
  return (
    <div className="w-full">
      <FlightsHeader flightCount={mockFlights.length} />

      {/* Responsive Grid: 1 column layout for flights */}
      <div className="space-y-4 lg:columns-2">
        {mockFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg">
          Load More Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightsView;
