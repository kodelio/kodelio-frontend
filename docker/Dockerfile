# Stage 1 - build
FROM node:16.15.1-bullseye-slim AS builder
WORKDIR /kodelio-frontend
RUN apt-get update -y  \
    && apt-get upgrade -y  \
    && rm -rf /var/lib/apt/lists/*
ADD package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build \
    && yarn cache clean

# Stage 2 - production
FROM node:16.15.1-bullseye-slim AS final
ENV NODE_ENV="production"
WORKDIR /kodelio-frontend
RUN apt-get update -y  \
    && apt-get upgrade -y  \
    && rm -rf /var/lib/apt/lists/*
COPY package.json .
COPY nuxt.config.js .
COPY --from=builder /kodelio-frontend/.nuxt ./.nuxt
COPY --from=builder /kodelio-frontend/node_modules ./node_modules
COPY --from=builder /kodelio-frontend/static ./static
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["yarn", "start"]