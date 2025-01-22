"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { SortingDropdown } from "@/components/sorting-dropdown";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ProductsData } from "@/constants/data";
import { IProduct } from "@/lib/features/product/type";
import { fetchProducts } from "@/lib/features/product/productThunk";
import { RootState, AppDispatch } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";

const categories = ["Electronics", "Accessories", "Wearables"];
const brands = ["Brand A", "Brand B", "Brand C"];

export default function ProductListingPage() {
  const { loading, error, items } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [products, setProducts] = useState<IProduct[]>(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filters: any) => {
    // Apply filters to products
    console.log("Filters applied:", filters);
  };

  const handleSortChange = (value: string) => {
    // Sort products based on selected value
    console.log("Sort applied:", value);
  };

  const handleSearch = (query: string) => {
    // Search products based on query
    console.log("Search query:", query);
  };

  const handleAddToCart = (id: number) => {
    // Add product to cart
    console.log("Product added to cart:", id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <h1 className="text-3xl font-bold">Products</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="mb-8 lg:mb-0">
          <div className="flex items-center justify-between lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Menu className="mr-2 h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            <SortingDropdown onSortChange={handleSortChange} />
          </div>
          <div className=""></div>
          <div
            className={`mt-4 lg:mt-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <FilterSidebar
              categories={categories}
              brands={brands}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="hidden lg:mb-4 lg:flex lg:justify-end">
            <SortingDropdown onSortChange={handleSortChange} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product?._id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
