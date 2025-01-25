"use client";
import {
  sectionClasses,
  containerClasses,
  headingClasses,
} from "@/styles/shared";
import { ProductCard } from "@/components/product-card";
import { IProduct } from "@/lib/features/product/type";
import { ProductCardSkeleton } from "./productSkeletonCard";

interface ProductProps {
  products: IProduct[];
  isLoading: boolean;
}

export const FeaturedProducts: React.FC<ProductProps> = ({
  products,
  isLoading,
}) => {
  const handleAddToCart = (id: number) => {
    // Add product to cart
    console.log("Product added to cart:", id);
  };

  return (
    <section id="featured-products" className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Render Skeleton Loaders when loading */}
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products
                ?.slice(0, 8)
                .map((product) => (
                  <ProductCard
                    key={product._id}
                    {...product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
        </div>
      </div>
    </section>
  );
};
