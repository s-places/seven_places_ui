FROM node as builder

WORKDIR /seven_places_ui
COPY . .
RUN yarn install && yarn build

FROM nginx

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /seven_places_ui/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]