import { Star } from "lucide-react";

interface ProductInfoProps {
  title: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount?: number;
  inStock?: boolean;
}

export function ProductInfo({ title, price, rating }: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        {/* <span className="text-sm text-gray-500">({reviewCount} reviews)</span> */}
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-bold text-primary">
          N{price.toFixed(2)}
        </span>
      </div>
      {/* <div className="flex items-center space-x-2">
        <span className="font-semibold">Availability:</span>
        {inStock ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
      </div> */}
    </div>
  );
}
