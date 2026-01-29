export default async function handler(req, res) {
    // 1. السماح فقط بطلبات POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { paymentId, action, txid } = req.body;
    
    // 2. استخدام المفتاح السري (سنجعله آمناً في الخطوة التالية)
    const SERVER_API_KEY = process.env.PI_API_KEY; 

    try {
        // 3. المراسلة الرسمية مع سيرفرات باي باستخدام الـ Backticks الصحيحة
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
