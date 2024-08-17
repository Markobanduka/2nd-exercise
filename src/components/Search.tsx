"use client";
import { getProductBySearch } from "@/services/ProductService";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const Search = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const searchForProduct = async () => {
    try {
      const result = await getProductBySearch(query);
      const simplifiedData = result.products.map((product: any) => ({
        id: product.id,
        title: product.name,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
      }));
      setData(simplifiedData);
      setError(null);
    } catch (err) {
      setError("Failed to fetch products");
      setData(null);
    }
  };

  return (
    <div className="flex-[2]">
      <input
        type="text"
        placeholder="Find Product"
        className="border rounded-md"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-primary p-2" onClick={searchForProduct}>
        Search
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {data && (
        <div>
          {data.map((product, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-bold">{product.title}</h2>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={96}
                height={96}
                className="object-cover mb-2"
              />
              <p>{product.description}</p>
              <p className="font-semibold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
