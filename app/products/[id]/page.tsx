"use client";
import react, { useEffect } from "react";
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
    dispatch(fetchProductById(params.id));
  }, [params.id]);
  if (!data) {
    return <div>Loading...</div>;
  }
  return <ProductDetailsPage product={data} />;
}
