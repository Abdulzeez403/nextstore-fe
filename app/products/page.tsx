"use client";

import { Suspense, useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { SortingDropdown } from "@/components/sorting-dropdown";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { IProduct } from "@/lib/features/product/type";
import { fetchProducts } from "@/lib/features/product/productThunk";
import { RootState, AppDispatch } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { ProductCardSkeleton } from "@/components/productSkeletonCard";
import { useSearchParams } from "next/navigation";

const categories = ["Phones", "Accessories", "Laptops"];
const ITEMS_PER_PAGE = 8;

export default function ProductListingPage() {
  const {
    loading: isLoading,
    error,
    items: allProducts,
  } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<{ category?: string }>({});
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(allProducts); // Sync products with Redux store
  }, [allProducts]);

  useEffect(() => {
    if (category) {
      handleFilterChange({ category });
    }
  }, [category]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters: { category?: string }) => {
    setFilters(newFilters);
    // Apply filters to products (Example: filtering by category or brand)
    const filteredProducts = allProducts.filter((product: IProduct) => {
      let matches = true;
      if (newFilters.category) {
        matches = matches && product.category === newFilters.category;
      }
      return matches;
    });
    setProducts(filteredProducts);
    setCurrentPage(1); // Reset to first page after applying filters
  };

  const handleSortChange = (value: string) => {
    // Sort products based on selected value
    const sortedProducts = [...products].sort((a, b) => {
      if (value === "price-asc") return a.price - b.price;
      if (value === "price-desc") return b.price - a.price;
      if (value === "name") return a.name.localeCompare(b.name);
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleSearch = (query: string) => {
    const searchedProducts = allProducts.filter((product: IProduct) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(searchedProducts);
    setCurrentPage(1); // Reset to first page after search
  };

  const clearFilters = () => {
    setFilters({});
    setProducts(allProducts); // Reset to all products
    setCurrentPage(1); // Reset to the first page
  };

  const handleAddToCart = (id: number) => {
    console.log("Product added to cart:", id);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            <div
              className={`mt-4 lg:mt-0 ${
                showFilters ? "block" : "hidden lg:block"
              }`}
            >
              <FilterSidebar
                categories={categories}
                onFilterChange={handleFilterChange}
              />
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="hidden lg:mb-4 lg:flex lg:justify-end">
              <SortingDropdown onSortChange={handleSortChange} />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    {...product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-bold">No Products Found</h2>
                <p className="text-gray-600">
                  We couldn’t find any products matching your search or filters.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
            {/* Pagination */}
            {!isLoading && paginatedProducts.length > 0 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
