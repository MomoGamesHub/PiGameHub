export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId, action, txid } = req.body;
  const apiKey = process.env.PI_API_KEY; // تأكدي أن الاسم في Vercel هو PI_API_KEY

  try {
    // 1. مرحلة الموافقة (Approve)
    if (action === 'approve') {
      const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
        method: 'POST',
        headers: { 'Authorization': `Key ${apiKey}` }
      });
      return res.status(200).json({ success: true });
    }

    // 2. مرحلة الإكمال (Complete)
    if (action === 'complete') {
      const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
        method: 'POST',
        headers: { 
          'Authorization': `Key ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ txid })
      });
      return res.status(200).json({ success: true });
    }

    res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
