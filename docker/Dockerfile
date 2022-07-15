# Stage 1 - build
FROM node:lts-alpine3.16 AS builder

WORKDIR /kodelio-frontend

COPY package.json yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn build \
    && yarn cache clean

# Stage 2 - production
FROM node:lts-alpine3.16 AS final
ARG PORT=3000
ENV NODE_ENV="production"
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=$PORT

RUN apk --update-cache apk update \
    && apk add dumb-init \
    && rm -rf /var/cache/apk/* \
    && addgroup -S kodelio && adduser -S kodelio -G kodelio

WORKDIR /home/kodelio/kodelio-frontend

COPY package.json ./
COPY nuxt.config.js ./
COPY --from=builder /kodelio-frontend/.nuxt ./.nuxt
COPY --from=builder /kodelio-frontend/node_modules ./node_modules
COPY --from=builder /kodelio-frontend/static ./static

EXPOSE $PORT
USER kodelio
CMD ["dumb-init", "yarn", "start"]
