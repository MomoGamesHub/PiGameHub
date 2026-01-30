export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { paymentId, action, txid } = req.body;
    const SERVER_API_KEY = process.env.PI_API_KEY;

    try {
        // استخدام fetch المدمجة في Node.js 18+ لتجنب مشاكل الاستيراد
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/${action}`, {
            method: 'POST',
            headers: {
                'Authorization': `Key ${SERVER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ txid })
        });

        const result = await response.json();
        
        // سجل الاستجابة في Vercel للتأكد من الموافقة
        console.log("Success:", result);
        return res.status(200).json(result);

    } catch (error) {
        console.error("Fetch Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
