fetch('https://team.humanos.foundation/send_request?model=crm.lead', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'fd7ad0b686cbb2c00e6e8ccecf8c73e3832caf6b'
  },
  body: JSON.stringify({
    values: {
      name: 'Direct JS File Verification',
      description: 'Proving the token override via python injection works perfectly',
      email_from: 'ramon@coqui.cloud'
    }
  })
}).then(r => r.json()).then(console.log).catch(console.error);
