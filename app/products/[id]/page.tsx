"use client";
import { useEffect } from "react";
import { ProductDetailsPage } from "@/components/product-detail-page";
import { fetchProductById } from "@/lib/features/product/productThunk";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";

export default function Page({ params }: { params: { id: string } }) {
  const {
    loading,
    error,
    product: data,
  } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // Only fetch the product if it's not already in the store
    if (!data || data._id !== params.id) {
      dispatch(fetchProductById(params.id));
    }
  }, [dispatch, data, params.id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return <ProductDetailsPage product={data as any} />;
}
