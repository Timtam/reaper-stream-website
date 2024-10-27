FROM python:3.12 AS rss

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y --no-install-recommends ffmpeg && \
    git clone https://github.com/Timtam/podcast-rss-generator.git && \
    cd /usr/src/app/podcast-rss-generator/ && \
    pip install -r requirements.txt

COPY podcast_config.yaml /usr/src/app/podcast-rss-generator/
COPY theglobalvoice.pem /usr/src/app/

ENV REQUESTS_CA_BUNDLE=/usr/src/app/theglobalvoice.pem

RUN cd /usr/src/app/podcast-rss-generator && \
    python rss_generator.py

FROM node:20 AS builder

WORKDIR /app

COPY . /app

RUN npm install && npm run build

FROM alpine

RUN apk update && \
    apk add nginx nginx-mod-http-brotli

# Copy files to the default nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=rss /usr/src/app/podcast-rss-generator/podcast_feed.xml /usr/share/nginx/html/rss.xml

# Copy nginx host configuration
COPY nginx/default.conf /etc/nginx/http.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
