export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { paymentId, action, txid } = req.body;
    
    // سحب المفتاح من إعدادات Vercel التي قمت بضبطها مسبقاً
    const SERVER_API_KEY = process.env.PI_API_KEY; 

    try {
        // تم تصحيح الرابط باستخدام علامات الـ Backticks `
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/${action}`, {
            method: 'POST',
            headers: {
                'Authorization': `Key ${SERVER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ txid })
        });

        const result = await response.json();
        return res.status(200).json(result);
        
    } catch (error) {
        console.error("Pi Error:", error);
        return res.status(500).json({ error: error.message });
    }
}
