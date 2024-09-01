# Step 1: Specify the base image nodejs
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /usr/src/server

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Install ffmpeg
RUN apk add --no-cache ffmpeg

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port your server runs on
EXPOSE 4000

# Step 7: Start the server
CMD ["npm", "start"]
