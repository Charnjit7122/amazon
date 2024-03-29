import { connectToDatabase } from "../../../lib/mongodb/mongodbconnection";

export default async function handler(req, res) {
  const { method, body } = req;
  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const category = await db
        .collection("Category")
        .find()
        .sort({ name: 1 })
        .toArray();

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
