import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSidebarProps {
  categories: string[];
  // brands: string[]
  onFilterChange: (filters: any) => void;
}

export function FilterSidebar({
  categories,
  onFilterChange,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    updateFilters({ priceRange: value });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
    updateFilters({ categories: updatedCategories });
  };

  // const handleBrandChange = (brand: string, checked: boolean) => {
  //   const updatedBrands = checked
  //     ? [...selectedBrands, brand]
  //     : selectedBrands.filter((b) => b !== brand)
  //   setSelectedBrands(updatedBrands)
  //   updateFilters({ brands: updatedBrands })
  // }

  const handleRatingChange = (rating: number, checked: boolean) => {
    const updatedRatings = checked
      ? [...selectedRatings, rating]
      : selectedRatings.filter((r) => r !== rating);
    setSelectedRatings(updatedRatings);
    updateFilters({ ratings: updatedRatings });
  };

  const updateFilters = (newFilters: any) => {
    onFilterChange({
      priceRange,
      categories: selectedCategories,
      // brands: selectedBrands,
      ratings: selectedRatings,
      ...newFilters,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="w-full"
        />
        <div className="mt-2 flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <h3 className="mb-2 text-lg font-semibold">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div> */}

      <div>
        <h3 className="mb-2 text-lg font-semibold">Ratings</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={(checked) =>
                  handleRatingChange(rating, checked as boolean)
                }
              />
              <label htmlFor={`rating-${rating}`} className="ml-2 text-sm">
                {rating}+ Stars
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
