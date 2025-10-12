FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# 2️⃣ Use a lightweight server to serve the build
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=build /app/build ./build

# Expose port 80
EXPOSE 80

# Start the server
CMD ["serve", "-s", "build", "-l", "80"]