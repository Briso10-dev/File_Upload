# Use Node.js LTS version as the base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build TypeScript code
RUN yarn tsc

# Expose the port your app runs on
EXPOSE 3002

# Start the application
CMD ["node", "dist/index.js"]
