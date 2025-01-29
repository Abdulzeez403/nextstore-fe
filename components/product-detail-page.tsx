"use client";

import { useState, useEffect } from "react";
import { ImageGallery } from "@/components/image-gallery";
import { ProductInfo } from "@/components/product-info";
import { AddToCartSection } from "@/components/add-to-cart-section";
import { DescriptionReviewsTabs } from "@/components/description-reviews-tabs";
import { RelatedProducts } from "@/components/related-products";
import { Breadcrumb } from "@/components/breadcrumb";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IProduct } from "@/lib/features/product/type";

interface ProductDetailsPageProps {
  product: IProduct;
}

export function ProductDetailsPage({ product: data }: ProductDetailsPageProps) {
  const [product, setProduct] = useState<IProduct | null>(data);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const sizes = ["S", "M", "L"];

  const colors = ["Black", "White", "Blue", "Red", "Grey"];

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleSizeChange = (newSize: string) => {
    setSelectedSize(newSize);
  };

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          {
            label: product?.name.slice(0, 20) || "",
            href: `/products/${product?._id || ""}`,
          },
        ]}
      />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {product?.images && (
          <ImageGallery images={product?.images.map((image) => image)} />
        )}
        <div className="space-y-6">
          <ProductInfo
            title={product?.name || ""}
            price={product?.price || 0}
            rating={product?.rating || 3}
            stock={product?.stock || 0}
          />
          <AddToCartSection
            category={product?.category || ""}
            sizes={product?.sizes || sizes}
            colors={product?.colors || colors}
            onQuantityChange={handleQuantityChange}
            onSizeChange={handleSizeChange}
            onColorChange={handleColorChange}
            onAddToCart={function (
              quantity: number,
              size: string,
              color: string
            ): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Delivery Details </h3>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                placeholder="Enter your delivery address"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Any special instructions or notes"
              />
            </div>
          </div>
          <WhatsAppButton
            product={{
              title: product?.name || "",
              price: product?.price ?? 0,
              sellerPhoneNumber: "+2348063249490",
              images: product?.images ? [product.images[0]] : [],
            }}
            quantity={quantity}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            userAddress={userAddress}
            userPhone={userPhone}
            userNotes={userNotes}
          />
        </div>
      </div>
      <div className="mt-12">
        <DescriptionReviewsTabs
          description={product?.description ?? ""}
          specifications={(product?.specifications as any) || []}
          // reviews={product?.reviews || []}
        />
      </div>
      <div className="mt-16">
        <RelatedProducts products={[]} />
      </div>
    </div>
  );
}
