import Image from "next/image";
import React from "react";
import { getProductById } from "./services/ProductService";

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

const SingleProduct: React.FC<ParamsProps> = async ({ params }) => {
  const data: DataProps = await getProductById(Number(params.id));
  console.log(data);

  if (!data) {
    return <p>Product not found</p>;
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

export default SingleProduct;
