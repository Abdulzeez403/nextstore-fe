"use client";
import {
  sectionClasses,
  containerClasses,
  headingClasses,
} from "@/styles/shared";
import { ProductCard } from "@/components/product-card";
import { IProduct } from "@/lib/features/product/type";

interface ProductProps {
  products: IProduct[];
}

export const FeaturedProducts: React.FC<ProductProps> = ({ products }) => {
  const handleAddToCart = (id: number) => {
    // Add product to cart
    console.log("Product added to cart:", id);
  };

  return (
    <section id="featured-products" className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Featured Products</h2>
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
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
