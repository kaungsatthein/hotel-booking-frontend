"use client";

import { Button } from "@/components/ui/button";
import { HotelsHeader } from "./HotelsHeader";
import { HotelCard } from "./HotelCard";

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  stars: number;
  location: string;
  price: number;
  currency: string;
  amenities: string[];
  reviewCount: number;
}

const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "Grand Palace Hotel",
    description:
      "Luxurious 5-star hotel in the heart of the city with stunning views and world-class amenities. Experience unparalleled comfort and service.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    rating: 4.8,
    stars: 5,
    location: "Downtown, Yangon",
    price: 250,
    currency: "USD",
    amenities: [
      "WiFi",
      "Parking",
      "Restaurant",
      "Coffee",
      "Coffee",
      "Coffee",
      "Coffee",
    ],
    reviewCount: 1247,
  },
  {
    id: "2",
    name: "Riverside Resort",
    description:
      "Peaceful riverside retreat with beautiful gardens and spa facilities. Perfect for relaxation and rejuvenation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=300&fit=crop",
    rating: 4.6,
    stars: 4,
    location: "Riverside, Mandalay",
    price: 180,
    currency: "USD",
    amenities: ["WiFi", "Restaurant", "Coffee"],
    reviewCount: 892,
  },
  {
    id: "3",
    name: "City Center Inn",
    description:
      "Modern boutique hotel with contemporary design and excellent location. Walking distance to major attractions.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop",
    rating: 4.4,
    stars: 3,
    location: "City Center, Yangon",
    price: 120,
    currency: "USD",
    amenities: ["WiFi", "Parking", "Coffee"],
    reviewCount: 634,
  },
  {
    id: "4",
    name: "Mountain View Lodge",
    description:
      "Scenic mountain lodge offering breathtaking views and outdoor activities. Perfect for nature lovers and adventure seekers.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop",
    rating: 4.7,
    stars: 4,
    location: "Shan Hills, Kalaw",
    price: 95,
    currency: "USD",
    amenities: ["WiFi", "Restaurant"],
    reviewCount: 456,
  },
  {
    id: "5",
    name: "Beach Paradise Resort",
    description:
      "Tropical beachfront resort with pristine white sand beaches and crystal clear waters. Ultimate beach vacation destination.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
    rating: 4.9,
    stars: 5,
    location: "Ngapali Beach",
    price: 320,
    currency: "USD",
    amenities: ["WiFi", "Parking", "Restaurant", "Coffee"],
    reviewCount: 2103,
  },
  {
    id: "6",
    name: "Heritage Boutique Hotel",
    description:
      "Charming heritage hotel with traditional architecture and modern comforts. Rich cultural experience in historic setting.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop",
    rating: 4.5,
    stars: 4,
    location: "Old Bagan",
    price: 160,
    currency: "USD",
    amenities: ["WiFi", "Restaurant", "Coffee"],
    reviewCount: 789,
  },
];

const HotelsView = () => {
  return (
    <div className="w-full">
      <HotelsHeader hotelCount={mockHotels.length} />

      {/* Responsive Grid: 3 columns on laptop, 1 column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg">
          Load More Hotels
        </Button>
      </div>
    </div>
  );
};

export default HotelsView;
