import { MongoClient } from "mongodb";
export default async function connect() {
  const dbUrl = "mongodb+srv://Kartikay5212854:h4Widd2Bt0d8ODZF@cluster0.xbbf81v.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "Blogs";
  const collectionName = "blogs";
  const client = await MongoClient.connect(dbUrl);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}
