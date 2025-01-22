"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface DescriptionReviewsTabsProps {
  description: string;
  specifications: { [key: string]: string };
  reviews?: Review[];
}

export function DescriptionReviewsTabs({
  description,
  specifications,
  reviews = [],
}: DescriptionReviewsTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4">
        <div className="prose max-w-none">{description}</div>
      </TabsContent>
      <TabsContent value="specifications" className="mt-4">
        <table className="w-full">
          <tbody>
            {specifications?.map(({ key, value, _id }) => (
              <tr key={_id} className="border-b">
                <td className="py-2 font-semibold">{key}</td>
                <td className="py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabsContent>
      <TabsContent value="reviews" className="mt-4">
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{review.author}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
