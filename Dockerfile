# Dockerfile
FROM node:16.15-alpine

# create destination directory
RUN mkdir -p /usr/src/kodelio-frontend
WORKDIR /usr/src/kodelio-frontend

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/kodelio-frontend/
RUN yarn install
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]