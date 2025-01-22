import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SortingDropdownProps {
  onSortChange: (value: string) => void
}

export function SortingDropdown({ onSortChange }: SortingDropdownProps) {
  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price_asc">Price: Low to High</SelectItem>
        <SelectItem value="price_desc">Price: High to Low</SelectItem>
        <SelectItem value="popularity">Popularity</SelectItem>
        <SelectItem value="newest">Newest Arrivals</SelectItem>
      </SelectContent>
    </Select>
  )
}

