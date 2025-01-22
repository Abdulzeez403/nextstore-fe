import Image from "next/image";
import Link from "next/link";
import {
  sectionClasses,
  containerClasses,
  headingClasses,
} from "@/styles/shared";
import { FeaturedCategoriesData } from "@/constants/data";
import { Carousel } from "./ui/carousel";
import { Badge } from "./ui/badge";

export function FeaturedCategories() {
  return (
    <section id="featured-categories">
      <div className={containerClasses}>
        <h2 className={headingClasses}>Featured Categories</h2>
        <Carousel
          itemsToShow={{
            small: 2,
            medium: 4,
            large: 4,
          }}
        >
          {FeaturedCategoriesData.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="group relative m-2 block overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="relative aspect-square ">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="mb-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {category.title}
                  </h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                    Shop Now
                  </span>
                </div>
              </div>
              {category.badge && (
                <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
                  {category.badge}
                </Badge>
              )}
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
