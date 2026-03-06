import urllib.request
import json

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
        with urllib.request.urlopen(request) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        return json.loads(e.read().decode())

# Test by deleting existing an A record
print(req('DELETE', f'zones/{ZONE_ID}/dns_records/3ffae1c835b4eb5534260494170fad61'))
