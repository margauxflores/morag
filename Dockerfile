# Use the official Node.js 18 image as the base image
FROM node:18.17.0

# Set environment variables
ENV NODE_VERSION 18.17.0

# Create and set the working directory
RUN mkdir -p /app
WORKDIR /app

# Install Python 3 and other dependencies
RUN apt-get update && apt-get install -y python3 python3-pip

# Verify the Node.js version
RUN node -v

# Copy package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["sh", "-c", "npm install && npm run dev"]
