import { MongoClient } from 'mongodb';
const validateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
        return true
    }
    return false
}
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        if (!validateEmail(email)) {
            res.status(405).json({ success: false, message: 'Method not allowed' });
        }
        // Validate email here if needed

        const client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            const db = client.db(process.env.MONGODB_DB);

            const collection = db.collection('emails');

            const result = await collection.insertOne({ email });

            res.status(200).json({ success: true, result });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
