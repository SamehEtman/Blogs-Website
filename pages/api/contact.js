import { isEmail } from 'validator';
import { connectDB, insertEmail } from '../../lib/dp.util';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (isEmail(email) && name && message) {
      const document = {
        email,
        name,
        message,
      };
      let client;
      try {
        client = await connectDB();
        const data = await insertEmail(client, document);
        res.status(201).json({ message: 'Email sent!', ...data });
      } catch (err) {
        res.status(500).json({ message: 'Cannot connect to the database' });
      }
      client.close();
    } else {
      res.status(422).json({ message: 'Invalid arguments' });
    }
  }
};

export default handler;
