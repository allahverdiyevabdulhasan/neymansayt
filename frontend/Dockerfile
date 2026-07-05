FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

# Build the app
RUN npm run build

# Copy static files to standalone folder
RUN cp -r public .next/standalone/public
RUN cp -r .next/static .next/standalone/.next/static

# Start using standalone server
ENV PORT 3005
ENV HOSTNAME "0.0.0.0"
WORKDIR /app/.next/standalone
CMD ["node", "server.js"]
