import clientPromise from "@/utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  const client = await clientPromise;
  const db = client.db();

  if (method === "GET") {
    try {
      const collection = db.collection("Products");
      const product = await collection
        .find({ _id: new ObjectId(id) })
        .toArray();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
