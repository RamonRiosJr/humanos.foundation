import paramiko
import sys

def check_log():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect('144.126.135.5', username='aura_antigravity', password='3PinkCowsFlying!')
        # Look for odoo logs, common locations.
        stdin, stdout, stderr = client.exec_command('sudo cat /var/log/odoo/odoo-server.log | tail -n 100 || tail -n 100 /var/log/syslog || docker logs odoo | tail -n 100')
        print(stdout.read().decode())
        err = stderr.read().decode()
        if err:
            print("STDERR:", err)
    except Exception as e:
        print("SSH Error:", e)
    finally:
        client.close()

if __name__ == '__main__':
    check_log()
