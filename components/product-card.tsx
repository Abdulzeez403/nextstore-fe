import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { IProduct } from "@/lib/features/product/type";

interface ProductCardProps extends IProduct {
  onAddToCart: (id: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  name,
  description,
  price,
  stock,
  images = [],
  rating = 3,
  numReviews = 0,
  onAddToCart,
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <Carousel
        autoplay={true}
        autoplayInterval={4000}
        transitionSpeed={300}
        showArrows={true}
        showDots={true}
      >
        {[
          images?.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${name} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 bg-slate-200"
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <div className="flex h-full items-center justify-center text-gray-400">
                No Image Available
              </div>
            </div>
          ),
        ]}
      </Carousel>
      <div className="flex flex-1 flex-col p-4">
        <Link
          href={`/products/${_id}`}
          className="mb-2 text-sm font-medium text-gray-900 hover:text-primary sm:text-base"
        >
          {name.length > 20 ? name.slice(0, 35) + "..." : name}
        </Link>
        <div className="mb-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              ₦{new Intl.NumberFormat("en-NG").format(price)}
            </span>
          </div>

          <Link href={`/products/${_id}`}>
            <Button size="sm">Buy Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
