const axios = require('axios');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const { paymentId, txid, action } = req.body;
    const API_KEY = process.env.PI_API_KEY; 

    try {
        const url = `https://api.minepi.com/v2/payments/${paymentId}/${action}`;
        await axios.post(url, action === 'complete' ? { txid } : {}, {
            headers: { 'Authorization': `Key ${API_KEY}` }
        });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
