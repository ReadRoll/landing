# ---- Stage 1: Build ----
FROM node:24-alpine AS assets
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# ---- Stage 2: Nginx ----
FROM nginx/nginx-unprivileged:1.30.6-alpine AS runtime
COPY --from=assets /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
