async function testLead() {
  const url = 'https://team.humanos.foundation/humanos_api';
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'api-key': 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b'
  };

  const formParams = new URLSearchParams();
  formParams.append('method', 'POST');
  formParams.append('model', 'crm.lead');
  formParams.append('values', JSON.stringify({
      name: 'Website Contact Request',
      contact_name: 'Test Setup User',
      phone: '+1 555-555-5555',
      email_from: 'testuser@example.com',
      description: 'I would like to get involved.'
  }));

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: formParams
    });
    
    if (!response.ok) {
        console.error('Error Status:', response.status);
    }
    const data = await response.text();
    console.log('Response:', data);
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

testLead();
