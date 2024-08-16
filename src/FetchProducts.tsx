"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductData {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const FetchProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}products?limit=9`
      );
      const data = await res.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  const handleBuyClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="text-red-400 border border-primary rounded-md bg-secondary"
        >
          <div className="p-4">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                width={300}
                height={200}
              />
            ))}
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleBuyClick(product.id)}
              className="bg-primary text-white px-4 py-2 rounded-sm mb-2"
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchProducts;
