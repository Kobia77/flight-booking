# Use a Node.js base image
FROM node:20-alpine

# Create an application directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the backend server
CMD ["node", "index.js"]
