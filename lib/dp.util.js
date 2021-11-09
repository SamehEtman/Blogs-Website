import { MongoClient } from 'mongodb';

export const connectDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://taskapp:s159951s@cluster0.3rlt2.mongodb.net/Emails?retryWrites=true&w=majority`
  );
  return client;
};

export const insertEmail = async (client, document) => {
  const db = client.db();
  const result = await db.collection('emails').insertOne(document);
  return result;
};
