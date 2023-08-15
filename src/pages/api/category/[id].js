import { connectToDatabase } from "../../../lib/mongodb/mongodbconnection";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const product = await db
        .collection("Category")
        .find(new ObjectId(id))
        .toArray();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
