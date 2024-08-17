import type { NextApiRequest, NextApiResponse } from "next";
import { getProductBySearch } from "@/services/ProductService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { query } = req.query;

    try {
      if (typeof query === "string") {
        const result = await getProductBySearch(query);
        const simplifiedData = result.products.map((product: any) => ({
          title: product.title,
          description: product.description,
          price: product.price,
          thumbnail: product.thumbnail,
        }));
        res.status(200).json(simplifiedData);
      } else {
        res.status(400).json({ error: "Invalid query parameter" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
