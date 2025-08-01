import { LucideIcon } from "lucide-react";

export interface HotelData {
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  price: string;
  description: string;
  amenities: Amenity[];
  reviews: Review[];
}

export interface Amenity {
  icon: LucideIcon;
  name: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}
