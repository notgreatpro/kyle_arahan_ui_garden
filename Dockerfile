# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files
COPY . .

# Optional: run lint and prettier (won’t stop build if they fail)
RUN npm run lint || true
RUN npm run prettier || true

# Optional: skip tests for speed
# RUN npm test || true

# Build the production app
RUN npm run build


# ---- Production Stage ----
FROM nginx:alpine

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
