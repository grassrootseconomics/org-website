# GRASSROOTS NEW STATIC WEBSITE

A static website built with pelican.

## INSTRUCTIONS ON HOW TO BUILD

```angular2html
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
make devserver
```
## With Docker

docker build -t ge-blog .

docker run -p 8000:80 ge-blog 


