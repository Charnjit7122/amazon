import { Timestamp } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb/mongodbconnection";

export default async function handler(req, res) {
  const { method, body } = req;
  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const products = await db
        .collection("Products")
        .find()
        .sort({ timestamp: -1 })
        .toArray();

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const product = await db
        .collection("Products")
        .insertOne({ ...body, timestamp: new Timestamp() });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
