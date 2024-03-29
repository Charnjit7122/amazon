import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("Please add your MongoDB connection string to the .env file");
}

if (!clientPromise) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
