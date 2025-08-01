import { Amenity, HotelData } from "@/types/hotel";

const Amenities = ({ hotelData }: { hotelData: HotelData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hotelData.amenities.map((amenity: Amenity, index: number) => {
          const IconComponent = amenity.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg border"
            >
              <IconComponent className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
