export async function fetchProductById(id: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10-second timeout

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
      {
        signal: controller.signal,
      }
    );

    clearTimeout(timeout); // Clear the timeout if the request completes

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.text(); // Read the response as text
      console.error("API Error:", errorData);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
