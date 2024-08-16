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

const SingleProduct: React.FC<ParamsProps> = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products/${params.id}`
  );
  const data: DataProps = await res.json();

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
