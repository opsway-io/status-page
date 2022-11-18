FROM node:16-alpine3.16 as build
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . /app
RUN yarn build

FROM nginx:stable-alpine
COPY nginx/ /etc/nginx/
COPY --from=build /app/build /usr/share/nginx/html

ENTRYPOINT [ "/bin/sh", "/etc/nginx/entrypoint.sh" ]
