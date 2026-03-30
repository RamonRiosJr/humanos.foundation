async function testJSONRPC() {
  const url = 'https://team.humanos.foundation/humanos_api?model=crm.lead';
  
  const headers = {
    'Content-Type': 'application/json',
    'api-key': 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b'
  };

  const bodyData = {
    jsonrpc: "2.0",
    method: "call",
    params: {},
    id: Math.floor(Math.random() * 1000000000),
    // Our custom params required by rest_api_odoo controller
    values: {
      name: 'JSONRPC Formatted Lead',
      contact_name: 'Test RPC',
      phone: '555',
      email_from: 'rpc@example.com',
      description: 'Testing if jsonrpc wrapper bypasses the Werkzeug 500 crash.'
    }
  };

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData)
    });
    
    console.log(`Status: ${response.status}`);
    const text = await response.text();
    console.log('Response:', text);
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

testJSONRPC();
