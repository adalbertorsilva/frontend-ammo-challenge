FROM nginx

WORKDIR /usr/src/app

COPY build /usr/share/nginx/html
