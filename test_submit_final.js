async function testLiveIntegration() {
  const url = 'https://team.humanos.foundation/humanos_api?model=crm.lead&method=POST';
  const data = {
    values: {
        name: `Website Waitlist Form Test`,
        contact_name: "Integration Test User",
        email_from: "test@coqui.cloud",
        phone: "555-000-0000",
        description: `Waitlist Join Request\nRole: Patient\nReason: Data Sovereignty Testing\nVolunteer: null`
    }
  };

  const finalBody = new URLSearchParams();
  for (const [key, val] of Object.entries(data)) {
      finalBody.append(key, typeof val === 'object' ? JSON.stringify(val) : val);
  }

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'api-key': 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b'
        },
        body: finalBody
    });

    const status = response.status;
    let result = '';
    try {
        result = await response.json();
    } catch {
        result = await response.text();
    }

    console.log(`Live HTTP Status: ${status}`);
    console.log(`Payload Response:`, result);
  } catch (error) {
    console.error(`Fetch Error:`, error.message);
  }
}

testLiveIntegration();
