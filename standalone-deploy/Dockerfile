FROM python:3.9.7-slim-buster as build

WORKDIR /app

RUN apt-get update && apt-get install make 

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN make publish 

FROM openresty/openresty:buster-fat

COPY --from=build /app/output /var/www/pelican/output/ 

EXPOSE 80

COPY standalone-deploy/data/nginx.conf /etc/nginx/conf.d/default.conf

