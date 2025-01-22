interface ICategoryData {
  title: string;
  image: string;
  link: string;
  badge?: string;
}

export const FeaturedCategoriesData: ICategoryData[] = [
  {
    title: "Phones",
    image: "/phonenew.jpg",
    link: "/products",
    badge: "Popular",
  },
  {
    title: "Laptops",
    image: "/laptopnew.jpg",
    link: "/products",
  },
  {
    title: "Accessories",
    image: "/headsetnew.jpg",
    link: "/products",
    badge: "New",
  },
  {
    title: "Others",
    image: "/accessoriesnew.jpg",
    link: "/products",
  },
];

export interface IProductData {
  id: number;
  title: string;
  price: number;
  images: string[];
  rating: number;
  discountedPrice?: number;
  description?: string;
}

export const ProductsData: IProductData[] = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 79.99,
    images: [
      "/phonenew.jpg",
      "/placeholder.svg?height=300&width=300&text=Image2",
      "/placeholder.svg?height=300&width=300&text=Image3",
    ],
    rating: 4.5,
    description: "Durable and spacious with multiple compartments.",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    discountedPrice: 179.99,
    images: [
      "/laptopnew.jpg",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.2,
  },
  {
    id: 3,
    title: "Laptop Backpack",
    price: 49.99,
    images: [
      "/headsetnew.jpg",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.7,
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 89.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
      "/placeholder.svg?height=300&width=300&text=Image3",
      "/placeholder.svg?height=300&width=300&text=Image4",
    ],
    rating: 4.1,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    price: 59.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.4,
  },
  {
    id: 6,
    title: "Portable Charger",
    price: 39.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.6,
  },
];
