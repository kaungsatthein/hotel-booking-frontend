"use client";
import { Wifi, Car, Coffee, Dumbbell, Users } from "lucide-react";
import { useSession } from "next-auth/react";
import ImageSection from "./ImageSection";
import HotelDescriptionSection from "./HotelDescriptionSection";
import Amenities from "./Amenities";
import { HotelData } from "@/types/hotel";
import GuestReview from "./GuestReview";
import ExistingReview from "./ExistingReview";
import { Card, CardContent } from "../ui/card";

const HotelDetailPage = () => {
  // const { id } = useParams();
  const { data: session } = useSession();

  const hotelData: HotelData = {
    name: "Grand Palace Hotel",
    rating: 4.8,
    reviewCount: 1247,
    location: "Yangon",
    price: "50,000",
    description:
      "Experience luxury and comfort at the Grand Palace Hotel, located in the heart of downtown Yangon. Our elegant rooms and world-class amenities provide the perfect retreat for both business and leisure travelers.",
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Free Parking" },
      { icon: Coffee, name: "Restaurant" },
      { icon: Dumbbell, name: "Fitness Center" },
      { icon: Users, name: "Conference Room" },
    ],
    reviews: [
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Excellent service and beautiful rooms. The staff was incredibly helpful and the location is perfect.",
        date: "2 days ago",
      },
      {
        name: "Sarah Johnson",
        rating: 4,
        comment:
          "Great hotel with modern amenities. The breakfast was delicious and the view from our room was amazing.",
        date: "1 week ago",
      },
      {
        name: "Michael Chen",
        rating: 5,
        comment:
          "Outstanding experience! The hotel exceeded our expectations in every way. Highly recommended.",
        date: "2 weeks ago",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Image Section */}
      <div className="mb-8">
        <ImageSection />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Hotel Details */}
        <div className="lg:col-span-2 space-y-6">
          <HotelDescriptionSection hotelData={hotelData} />

          {/* Amenities */}
          <Amenities hotelData={hotelData} />

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>

            {/* Review Form - Only show for logged-in users */}
            {session?.user && <GuestReview />}

            {/* Existing Reviews */}
            <ExistingReview hotelData={hotelData} />
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <Card>
              <CardContent>hello</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;
