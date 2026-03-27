# Stage 1: 빌드
FROM node:22-alpine AS builder

WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# 의존성 먼저 복사 (캐시 활용)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 소스 복사 & 빌드
COPY . .
RUN pnpm build

# Stage 2: Nginx 서빙
FROM nginx:alpine

# 빌드 결과물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
