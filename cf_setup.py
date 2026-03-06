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

def run_setup():
    print("🚀 Deleting remaining old porkbun records...")
    print(req('DELETE', f'zones/{ZONE_ID}/dns_records/7447371d760a4b40328d002fce71ee41').get('success'))
    print(req('DELETE', f'zones/{ZONE_ID}/dns_records/7e2bad8bef371e333f4c26a0abf69a22').get('success'))
    print(req('DELETE', f'zones/{ZONE_ID}/dns_records/0223d8c3a272ce6ab61c0f7e6e0f516f').get('success'))
    
    print("\n✅ Adding new IonBlade A Record...")
    res = req('POST', f'zones/{ZONE_ID}/dns_records', {
        'type': 'A', 'name': '@', 'content': '147.135.45.24', 'ttl': 1, 'proxied': True
    })
    print(res.get('success', res.get('errors')))
    
    print("\n✅ Adding new CNAME www Record...")
    res = req('POST', f'zones/{ZONE_ID}/dns_records', {
        'type': 'CNAME', 'name': 'www', 'content': 'humanos.foundation', 'ttl': 1, 'proxied': True
    })
    print(res.get('success', res.get('errors')))

    print("\n✅ Adding MX Record...")
    res = req('POST', f'zones/{ZONE_ID}/dns_records', {
        'type': 'MX', 'name': '@', 'content': 'humanos.foundation', 'priority': 10, 'ttl': 1, 'proxied': False
    })
    print(res.get('success', res.get('errors')))

    print("\n✅ Adding SPF/TXT Record...")
    res = req('POST', f'zones/{ZONE_ID}/dns_records', {
        'type': 'TXT', 'name': '@', 'content': 'v=spf1 a mx ip4:147.135.45.24 ~all', 'ttl': 1, 'proxied': False
    })
    print(res.get('success', res.get('errors')))

    print("\n🔒 Configuring SSL Settings...")
    res = req('PATCH', f'zones/{ZONE_ID}/settings/ssl', {'value': 'strict'})
    print("Strict SSL:", res.get('success', res.get('errors')))
    
    res = req('PATCH', f'zones/{ZONE_ID}/settings/always_use_https', {'value': 'on'})
    print("Always HTTPS:", res.get('success', res.get('errors')))

    res = req('PATCH', f'zones/{ZONE_ID}/settings/automatic_https_rewrites', {'value': 'on'})
    print("HTTPS Rewrites:", res.get('success', res.get('errors')))
    
run_setup()

