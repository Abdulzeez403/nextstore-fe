import { fetchProductById } from "@/lib/apis/common/metadataApi";
import { Metadata } from "next";
import ProductPageClient from "./detial";

// Generate metadata dynamically
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   try {
//     // Fetch product data
//     const product = await fetchProductById(params.id);
//     const baseUrl =
//       process.env.NEXT_PUBLIC_URL || "https://nextstore-drab.vercel.app";

//     return {
//       title: product.name,
//       description: product.description || "No description available",
//       openGraph: {
//         title: product.name,
//         description: product.description || "No description available",
//         images: [
//           {
//             url: product.images?.[0] || "/placeholder-logo.svg", // Fallback image
//             width: 1200,
//             height: 630,
//             alt: product.name,
//           },
//         ],
//         url: `${baseUrl}/products/${params.id}`,
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: product.name,
//         description: product.description || "No description available",
//         images: [product.images?.[0] || "/placeholder-logo.svg"],
//       },
//     };
//   } catch (error) {
//     console.error("Failed to generate metadata:", error);
//     return {
//       title: "Product Not Found",
//       description: "The product you are looking for does not exist.",
//     };
//   }
// }

// Server component to fetch data and pass it to the client component
export default async function Page({ params }: { params: { id: string } }) {
  try {
    // Fetch product data
    const product = await fetchProductById(params.id);

    // Pass the product data to the client component
    return <ProductPageClient product={product} />;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return (
      <div className="text-center">
        Failed to load product. Please try again later.
      </div>
    );
  }
}
