import { MongoClient } from 'mongodb';
//import DB_URL from './dp'
export const connectDB = async () => {
  const client = await MongoClient.connect(
    process.env.DB_URL
  );
  return client;
};

export const insertEmail = async (client, document) => {
  const db = client.db();
  const result = await db.collection('emails').insertOne(document);
  return result;
};
