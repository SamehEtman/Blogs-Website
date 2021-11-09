import { MongoClient } from 'mongodb';
import DP_URL from './dp'
export const connectDB = async () => {
  const client = await MongoClient.connect(
    DP_URL
  );
  return client;
};

export const insertEmail = async (client, document) => {
  const db = client.db();
  const result = await db.collection('emails').insertOne(document);
  return result;
};
