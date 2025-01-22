import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products`; // Adjust based on your backend

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data.products;
});

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId: string) => {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  }
);


