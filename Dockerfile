FROM node:18 AS BUILD_IMAGE

WORKDIR /app

COPY . /app

RUN npm install && npm run build

FROM nginx:alpine

# Copy files to the default nginx directory
COPY --from=BUILD_IMAGE /app/build /usr/share/nginx/html

# Copy nginx host configuration
COPY nginx/default.conf /etc/nginx/conf.d/
