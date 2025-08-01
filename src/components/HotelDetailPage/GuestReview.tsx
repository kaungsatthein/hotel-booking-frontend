"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { MessageSquare, Star } from "lucide-react";
import { Button } from "../ui/button";

const GuestReview = () => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-medium">Write a Review</h3>
        </div>

        <div className="space-y-4">
          {/* Rating Selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">Rating</label>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setReviewRating(i + 1)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      i < reviewRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 hover:text-yellow-300"
                    }`}
                  />
                </button>
              ))}
              {reviewRating > 0 && (
                <span className="ml-2 text-sm text-muted-foreground">
                  {reviewRating} star{reviewRating !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>

          {/* Comment Input */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Your Review
            </label>
            <textarea
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              placeholder="Share your experience about this hotel..."
              className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md bg-transparent text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none resize-vertical"
              maxLength={500}
            />
            <div className="text-xs text-muted-foreground mt-1">
              {reviewComment.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-3">
            <Button
              onClick={async () => {
                if (reviewRating === 0) {
                  alert("Please select a rating");
                  return;
                }
                if (reviewComment.trim() === "") {
                  alert("Please write a review comment");
                  return;
                }

                setIsSubmittingReview(true);
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Reset form
                setReviewRating(0);
                setReviewComment("");
                setIsSubmittingReview(false);

                alert(
                  "Thank you for your review! It has been submitted successfully."
                );
              }}
              disabled={
                isSubmittingReview ||
                reviewRating === 0 ||
                reviewComment.trim() === ""
              }
              className="min-w-[120px]"
            >
              {isSubmittingReview ? "Submitting..." : "Submit Review"}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setReviewRating(0);
                setReviewComment("");
              }}
              disabled={isSubmittingReview}
            >
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestReview;
