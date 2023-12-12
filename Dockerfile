# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose port 3000 (or the port your Vue.js app is configured to run on)
EXPOSE 3000

# Start the Vue.js application
CMD ["npm", "run", "serve"]
