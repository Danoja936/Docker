# Use Node 22 image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose the backend port
EXPOSE 3000

# Use environment variable for MongoDB connection
ENV MONGO_URI=mongodb://mongo:27017/database

# Start the backend
CMD ["node", "index.js"]
