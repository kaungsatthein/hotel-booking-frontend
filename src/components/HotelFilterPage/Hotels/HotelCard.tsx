"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import { Hotel } from "./HotelsView";
import { useRouter } from "next/navigation";

interface HotelCardProps {
  hotel: Hotel;
}

export const HotelCard = ({ hotel }: HotelCardProps) => {
  const router = useRouter();
  const handleDetailRoute = () => {
    router.push(`/hotels/${hotel.id}`);
  };

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
      <div className="relative">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
          priority={false}
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-black">
            ${hotel.price}/{hotel.currency}
          </Badge>
        </div>
      </div>

      <CardContent className="pb-4">
        <div className="space-y-4">
          {/* Hotel Name and Stars */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground line-clamp-1">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(hotel.stars)}
              </div>
              <span className="text-sm text-muted-foreground">
                {hotel.stars} Star Hotel
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{hotel.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {hotel.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleDetailRoute}
            >
              View Details
            </Button>
            <Button className="flex-1">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
