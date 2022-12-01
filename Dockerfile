# syntax=docker/dockerfile:1
FROM node:19.2.0-alpine AS dependencies

WORKDIR /code
RUN wget "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -O /bin/pnpm; chmod +x /bin/pnpm;

COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY package.json .npmrc ./
RUN pnpm install --offline


FROM dependencies AS base
COPY . .


FROM base AS build

ARG BUILD_MODE=unset
RUN [[ "${BUILD_MODE}" == "development" || "${BUILD_MODE}" == "stage" || "${BUILD_MODE}" == "production" ]]

RUN pnpm build --mode ${BUILD_MODE}


FROM nginx:1.22.1-alpine AS prod
COPY --from=build ./code/config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./code/dist/ /usr/share/nginx/html
