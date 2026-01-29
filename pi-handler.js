export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { paymentId, action, txid } = req.body;
  
  // ضع الكود السري الخاص بك هنا بدلاً من الكلمة بالأسفل
  const SERVER_API_KEY = "f9przv6bgihvt2lkijsgkbo9o2ijdpwfi4sswfwyhibhlak50ykojxbifuuypkse";

  try {
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
    return res.status(500).json({ error: error.message });
  }
}
