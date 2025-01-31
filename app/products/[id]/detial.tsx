"use client";

import { useEffect } from "react";
import { ProductDetailsPage } from "@/components/product-detail-page";
import { fetchProductById } from "@/lib/features/product/productThunk";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";

export default function ProductPageClient({ product }: { product: any }) {
  const { loading, product: data } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useDispatch<AppDispatch>();

  // Fetch product data if it's not already in the store
  useEffect(() => {
    if (!data || data._id !== product._id) {
      dispatch(fetchProductById(product._id));
    }
  }, [dispatch, data, product._id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  // Display the product details
  return <ProductDetailsPage product={data || product} />;
}
