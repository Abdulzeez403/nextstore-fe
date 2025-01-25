"use client";
import react, { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Testimonials } from "@/components/testimonials";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";

import { fetchProducts } from "@/lib/features/product/productThunk";

export default function HomePage() {
  const { loading, error, items } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(items, "value...");
  }, []);
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts products={items} isLoading={loading} />
      <Testimonials />
    </>
  );
}
