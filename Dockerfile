# # Stage 1: Build the Next.js app
# FROM node:14-alpine as builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# # Stage 2: Create a smaller image for production
# FROM node:14-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install --only=production

# COPY --from=builder /app/.next ./.next
# COPY public ./public

# EXPOSE 3030

# CMD ["npm", "start"]
# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3030

# Start the app
CMD ["npm", "start"]

