import Image from "next/image";
import React from "react";

interface ParamsProps {
  params: {
    id: string;
  };
}

interface DataProps {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  category: string;
  returnPolicy: string;
}

const ProductPage: React.FC<ParamsProps> = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data: DataProps = await res.json();

  if (res.status === 404) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Image src={data.thumbnail} alt={data.title} width={200} height={450} />
      <p>Price: {data.price}</p>
      <p>Category: {data.category}</p>
      <p>Return Policy: {data.returnPolicy}</p>
    </div>
  );
};

export default ProductPage;
