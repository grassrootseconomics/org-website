# Grassroots Pelican Webiste

A static website built with pelican.

## Development

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
make devserver
```
## Standalone Deploy
 
__On a new or existing droplet (requires docker and docker-compose)__

```sh
# Make sure the A name choosen point to the droplet IP
# Replace domain name init-cert.sh (line 8)  and data/nginx.conf (lines 3,16,20,21)

$ cd standalone-deploy && bash init-cert.sh
$ docker build -t ge-blog -f Dockerfile ../
$ docker run -d -p 80:80 -p 443:443 -v $(pwd)/data/certbot/conf:/etc/letsencrypt -v $(pwd)/data/certbot/www:/var/www/certbot ge-blog

# Check if http->https redirect works https://httpstatus.io/
# http://grassecon.net
# https://grassecon.net
```