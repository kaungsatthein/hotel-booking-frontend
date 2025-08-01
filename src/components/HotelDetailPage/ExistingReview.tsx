import { HotelData } from "@/types/hotel";
import React from "react";
import { Card, CardContent } from "../ui/card";
import renderStars from "@/lib/helper/renderStars";

const ExistingReview = ({ hotelData }: { hotelData: HotelData }) => {
  return (
    <div className="space-y-4">
      {hotelData.reviews.map((review, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {review.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {review.comment}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExistingReview;
