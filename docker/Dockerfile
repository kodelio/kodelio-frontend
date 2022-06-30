# Using node LTS with latest debian version
FROM node:16.15.1-bullseye-slim

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV="production"

# Update and upgrade packages to minimize vulnerabilities
# Delete apt cache to prevent the image size from increasing unnecessarily
# Create non root user
RUN apt-get update -y  \
    && apt-get upgrade -y  \
    && apt-get install dumb-init -y \
    && rm -rf /var/lib/apt/lists/* \
    && useradd -ms /bin/bash laurent

WORKDIR /home/laurent/app

# Copy file root:root to avoid non root user to edit/delete it.
COPY ./package.json ./
COPY ./components ./components/
COPY ./pages ./pages/
COPY ./static ./static/

# Run 3 commands in one layer for image size purpose
RUN yarn install \
    && yarn build \
    && yarn cache clean

COPY nuxt.config.js ./

EXPOSE 3000
USER laurent
CMD ["dumb-init","yarn", "start"]
