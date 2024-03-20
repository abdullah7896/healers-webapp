# Stage 1: Build Angular application
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf


# Copy built Angular app files to Nginx HTML directory
COPY --from=build /app/dist/healers .




# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
