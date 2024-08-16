import Image from "next/image";
import React from "react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.slug}`);
  const data: ProductData = await response.json();
  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.price}</p>
      <div>
        {data.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            width={640}
            height={480}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
