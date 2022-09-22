FROM node:16-alpine AS base

FROM base AS builder
WORKDIR /build
COPY server/package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY server .
RUN yarn build && \
    yarn install --prod

FROM base AS runner
WORKDIR /app
COPY --from=builder /build/dist dist
COPY --from=builder /build/node_modules node_modules
CMD ["dist/main"]
