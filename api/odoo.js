export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { model, method = 'POST', data } = req.body;
        
        if (!model) {
            return res.status(400).json({ error: 'Model parameter required' });
        }

        const odooUrl = `https://team.humanos.foundation/humanos_api?model=${model}&method=${method}`;
        const apiKey = process.env.VITE_ODOO_API_KEY || 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b';
        
        const payload = data ? JSON.stringify(data) : undefined;
        const fetchOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        };

        if (payload) {
            fetchOptions.body = payload;
        }

        const odooRes = await fetch(odooUrl, fetchOptions);
        const result = await odooRes.json();
        
        if (!odooRes.ok) {
            return res.status(odooRes.status).json(result);
        }

        return res.status(200).json(result);
    } catch (err) {
        console.error('Vercel Odoo Proxy Error:', err);
        return res.status(500).json({ error: 'Internal Serverless Proxy Error: ' + err.message });
    }
}
