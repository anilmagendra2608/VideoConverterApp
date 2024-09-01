# Step 1: Specify the base image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /usr/src/client

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 6: Expose the port your client runs on
EXPOSE 3000

# Step 7: Start the client server
CMD ["npm", "start"]
