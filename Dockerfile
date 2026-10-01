# Dockerfile - PMT-BARA (Node.js 24.21.0 + Express 5.2.1)
FROM node:24.21.0-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install express@5.2.1

# Copy application source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
