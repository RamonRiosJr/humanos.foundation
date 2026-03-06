import urllib.request
import json
import ssl

context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

ZONE_ID = 'cdc509f5a540432af7048c4652a0cfd1'
TOKEN = 'TSfhdRLjQ3jSiT8xGgLzWRvflFoVbKg-Xe8nTgpJ'

def req(method, path, data=None):
    url = f'https://api.cloudflare.com/client/v4/{path}'
    headers = {
        'Authorization': f'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    }
    body = json.dumps(data).encode('utf-8') if data else None
    request = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, context=context) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        return json.loads(e.read().decode())

def run_setup():
    print("Testing record creation...")
    res = req('POST', f'zones/{ZONE_ID}/dns_records', {
        'type': 'A', 'name': '@', 'content': '147.135.45.24', 'ttl': 1, 'proxied': True
    })
    print(json.dumps(res, indent=2))
run_setup()
