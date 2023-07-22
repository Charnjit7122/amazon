
import connectToDatabase from "@/utils/db";
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
        .collection("Products")
        .find(new ObjectId(id))
        .toArray();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    try {
      await db.collection("Products").deleteOne({ _id: new ObjectId(id) });

      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const response = await db
        .collection("Products")
        .updateOne({ _id: new ObjectId(id) }, { $set: { ...body } });

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
