import { MongoClient } from "mongodb";
export default async function connect(collectionName) {
  const dbUrl = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  
  return {collection};
}
