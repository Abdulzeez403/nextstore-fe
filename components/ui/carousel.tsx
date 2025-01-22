"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  children: ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  transitionSpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  itemsToShow?: {
    small: number;
    medium: number;
    large: number;
  };
}

export function Carousel({
  children,
  autoplay = true,
  autoplayInterval = 5000,
  transitionSpeed = 300,
  showArrows = true,
  showDots = true,
  itemsToShow = { small: 1, medium: 1, large: 1 },
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const totalItems = React.Children.count(children);

  const getItemsToShow = useCallback(() => {
    if (typeof window === "undefined") return itemsToShow.small;
    if (window.innerWidth >= 1024) return itemsToShow.large;
    if (window.innerWidth >= 768) return itemsToShow.medium;
    return itemsToShow.small;
  }, [itemsToShow]);

  const [visibleItems, setVisibleItems] = useState(getItemsToShow());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getItemsToShow]);

  const maxIndex = Math.max(0, totalItems - visibleItems);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  }, [maxIndex]);

  useEffect(() => {
    if (autoplay && !isAutoplayPaused) {
      const timer = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayInterval, isAutoplayPaused, nextSlide]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const toggleAutoplay = () => {
    setIsAutoplayPaused(!isAutoplayPaused);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
      {...handlers}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            transitionDuration: `${transitionSpeed}ms`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}
      {showDots && (
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        className="absolute bottom-2 right-2 rounded-full bg-white/80 shadow-md"
        onClick={toggleAutoplay}
      >
        {isAutoplayPaused ? (
          <Play className="h-4 w-4" />
        ) : (
          <Pause className="h-4 w-4" />
        )}
        <span className="sr-only">
          {isAutoplayPaused ? "Play" : "Pause"} autoplay
        </span>
      </Button>
    </div>
  );
}
