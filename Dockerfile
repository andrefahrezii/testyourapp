# Stage 1: Build the Next.js app
FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a smaller image for production
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY public ./public

EXPOSE 3030

CMD ["npm", "start"]
