import clientPromise from "@/utils/db";

export default async function handler(req, res) {
  const { method, body } = req;
  const client = await clientPromise;
  const db = client.db();

  if (method === "GET") {
    try {
      const collection = db.collection("Products");
      const products = await collection.find().toArray();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
