async function testRequest(contentType) {
  console.log(`\n--- Testing Content-Type: ${contentType} ---`);
  const url = 'https://team.humanos.foundation/humanos_api?model=crm.lead&method=POST';
  const headers = {
    'api-key': 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b'
  };
  if (contentType !== 'NONE') {
      headers['Content-Type'] = contentType;
  }

  const bodyData = {
    values: {
      name: `API Test with ${contentType}`,
      contact_name: 'AI Agent Validator',
      email_from: 'bot@example.com',
      phone: '555-555-5555',
      description: 'Verifying payload bypass'
    }
  };

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData)
    });
    
    const status = response.status;
    const text = await response.text();
    console.log(`Status: ${status}`);
    console.log(`Response: ${text.substring(0, 100).replace(/\n/g, ' ')}...`);
  } catch (error) {
    console.error(`Fetch Error:`, error.message);
  }
}

async function run() {
  await testRequest('application/json');
  await testRequest('text/plain');
  await testRequest('NONE');
  await testRequest('application/x-www-form-urlencoded');
}

run();
