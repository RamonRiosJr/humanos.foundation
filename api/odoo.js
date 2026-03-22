export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Retrieve secure server-side variables
  const ODOO_API_URL = process.env.ODOO_API_URL || 'https://team.humanos.foundation';
  const ODOO_API_KEY = process.env.ODOO_API_KEY;
  const ODOO_USER = process.env.ODOO_USER;
  const ODOO_PASS = process.env.ODOO_PASS;

  if (!ODOO_API_KEY || !ODOO_USER || !ODOO_PASS) {
    return res.status(500).json({ error: 'Odoo secure proxy is not configured correctly on the server.' });
  }

  const { model, data, method = 'POST' } = req.body;

  if (!model) {
    return res.status(400).json({ error: 'Missing Odoo model' });
  }

  const url = `${ODOO_API_URL}/send_request?model=${model}`;

  const finalMethod = (data && method.toUpperCase() === 'GET') ? 'POST' : method;
  
  let finalBody = data ? JSON.stringify(data) : undefined;
  if (!data && finalMethod === 'POST') {
      finalBody = JSON.stringify({ fields: ["name", "id", "subtitle", "content", "post_date"] });
  }

  try {
    const response = await fetch(url, {
      method: finalMethod,
      headers: {
        'Content-Type': 'application/json',
        'api-key': ODOO_API_KEY,
        'login': ODOO_USER,
        'password': ODOO_PASS
      },
      body: finalBody
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: 'Odoo server error', details: errorText });
    }

    const responseData = await response.json();
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('Odoo API Proxy Error:', error);
    return res.status(500).json({ error: 'Internal server error during Odoo sync' });
  }
}
