import renderStars from "@/lib/helper/renderStars";
import { Separator } from "../ui/separator";
import { MapPin } from "lucide-react";
import { HotelData } from "@/types/hotel";

const HotelDescriptionSection = ({ hotelData }: { hotelData: HotelData }) => {
  return (
    <>
      {/* Hotel Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {hotelData.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {renderStars(hotelData.rating)}
              </div>
              <span className="text-sm font-medium">{hotelData.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({hotelData.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{hotelData.location}</span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-2xl font-bold text-primary">
              {hotelData.price} MMK
            </span>

            <span className="text-sm text-muted-foreground">per night</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-3">About this hotel</h2>
        <p className="text-muted-foreground leading-relaxed">
          {hotelData.description}
        </p>
      </div>
    </>
  );
};

export default HotelDescriptionSection;
