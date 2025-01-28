import { Star } from "lucide-react";

interface ProductInfoProps {
  title: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount?: number;
  stock?: number;
}

export function ProductInfo({ title, price, rating, stock }: ProductInfoProps) {
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
          ₦{new Intl.NumberFormat("en-NG").format(price)}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Availability:</span>
        {(stock ?? 0) > 0 ? (
          <span className="flex items-center text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            In Stock
          </span>
        ) : (
          <span className="flex items-center text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Out of Stock
          </span>
        )}
      </div>
    </div>
  );
}
