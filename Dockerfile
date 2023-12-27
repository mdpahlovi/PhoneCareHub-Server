FROM node:20.10.0-alpine
WORKDIR /phonecarehub
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm generate
RUN pnpm build
EXPOSE 5000
CMD ["pnpm", "start"]
