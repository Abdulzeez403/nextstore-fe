import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarouselImage from "../public/nextcarousel1.jpg";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={CarouselImage}
          alt="Hero background"
          width={1920}
          height={800}
          priority
          className="h-full w-full object-cover brightness-[0.7]"
        />
      </div>
      <div className="relative z-10">
        <div className=" flex min-h-[400px] flex-col items-center justify-center  px-4 py-16 text-center sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8 ">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Discover the Best Deals on Phones, Laptops, and More
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-white/90 sm:text-lg md:text-xl">
              Shop the latest products at unbeatable prices
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base sm:text-lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white sm:text-lg"
                asChild
              >
                <Link href="/products" aria-disabled>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
