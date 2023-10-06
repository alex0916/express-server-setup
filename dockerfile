FROM node:18.18.0-bullseye-slim as base
RUN apt-get update && apt-get install -y openssl
RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

USER node

FROM base as build

COPY --chown=node package.json .
COPY --chown=node package-lock.json .
RUN npm ci

COPY --chown=node tsconfig.json .
COPY --chown=node src src
RUN npm run build

FROM base as dev
COPY --chown=node package.json .
COPY --chown=node package-lock.json .

RUN npm install

CMD ["npm", "run", "dev"]

FROM base as deployment

ENV NODE_ENV production

COPY --chown=node package.json .
COPY --chown=node package-lock.json .

RUN npm ci --only-production

COPY --from=build /app/dist .

CMD ["node", "server.js"]