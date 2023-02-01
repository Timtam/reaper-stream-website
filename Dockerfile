FROM nginx:alpine

# Copy files to the default nginx directory
COPY src /usr/share/nginx/html

# Copy nginx host configuration
COPY nginx/default.conf /etc/nginx/conf.d/
