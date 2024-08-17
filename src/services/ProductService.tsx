import axios from "axios";

export const getAllProducts = async (limit = 9) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products?limit=${limit}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  return await res.json();
};

export const getProductById = async (productId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products/${productId}`
  );
  if (res.status === 404) {
    return false;
  }
  return await res.json();
};

export const getProductBySearch = async (query: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}products/search?q=${query}`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.statusText);
      throw new Error(`Error fetching data: ${error.response?.statusText}`);
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
};
