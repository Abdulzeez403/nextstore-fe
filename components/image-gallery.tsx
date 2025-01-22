"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col space-y-4 ">
      <div className="relative aspect-square overflow-hidden rounded-lg ">
        <Image
          src={images[currentImage]}
          alt={`Product image ${currentImage + 1}`}
          fill
          className="object-cover bg-gray-200"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-4 right-4 bg-white/80"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative aspect-square">
              <Image
                src={images[currentImage]}
                alt={`Product image ${currentImage + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex space-x-4">
        {/* <Button variant="outline" size="icon" onClick={prevImage}>
          <ChevronLeft className="h-4 w-4" />
        </Button> */}
        <div className="flex flex-1 space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square h-16 w-16 overflow-hidden rounded-md ${
                index === currentImage ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
        {/* <Button variant="outline" size="icon" onClick={nextImage}>
          <ChevronRight className="h-4 w-4" />
        </Button> */}
      </div>
    </div>
  );
}
