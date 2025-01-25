import react from "react";
export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm p-4 animate-pulse">
      {/* Image Placeholder */}
      <div className="aspect-square bg-gray-200"></div>

      {/* Name Placeholder */}
      <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded"></div>

      {/* Rating Placeholder */}
      <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded"></div>

      {/* Footer Placeholder */}
      <div className="mt-4 flex items-center justify-between">
        <div className="h-6 w-20 bg-gray-200 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};
