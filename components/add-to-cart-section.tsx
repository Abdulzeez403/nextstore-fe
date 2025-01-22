"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddToCartSectionProps {
  sizes?: string[];
  colors: string[];
  onAddToCart: (quantity: number, size: string, color: string) => void;
  onQuantityChange: (newQuantity: number) => void;
  onSizeChange: (newSize: string) => void;
  onColorChange: (newColor: string) => void;
}

export function AddToCartSection({
  sizes = [],
  colors = [],
  onAddToCart,
  onQuantityChange,
  onSizeChange,
  onColorChange,
}: AddToCartSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);

  const handleAddToCart = () => {
    onAddToCart(quantity, size, color);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleSizeChange = (newSize: string) => {
    setSize(newSize);
    onSizeChange(newSize);
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label htmlFor="quantity" className="font-semibold">
          Quantity:
        </label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-20"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="size" className="font-semibold">
          Size:
        </label>
        <Select value={size} onValueChange={handleSizeChange}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes?.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="color" className="font-semibold">
          Color:
        </label>
        <Select value={color} onValueChange={handleColorChange}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {colors?.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className=" space-x-4 hidden">
        <Button onClick={handleAddToCart} className="flex-1">
          Add to Cart
        </Button>
        <Button variant="secondary" className="flex-1">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
