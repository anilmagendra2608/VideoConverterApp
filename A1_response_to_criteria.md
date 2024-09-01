# Assignment 1 - Web Server - Response to Criteria

## Overview : Video Converter Web Application

- **Name:** ANIL MAGENDRA
- **Student number:** N11647485
- **Application name:** Video Converter using FFMPEG library
- **Two line description:** This web application is a full stack app which has front end implemented using React and Back end by using Nodejs express and other dependencies. With the help of this Application we can convert video of one format to another and download it.

## Core criteria

### Docker image

- **ECR Repository name:** assignment1/n11647485-client , assignment1/n11647485-server
- **Video timestamp:**
- ## **Relevant files:** Docker Image for Client and Docker Image for Server:
  901444280953.dkr.ecr.ap-southeast-2.amazonaws.com/assignment1/n11647485-client 1.0.0 ae45f0728528 6 hours ago 432MB
  videoconverter-client  
  901444280953.dkr.ecr.ap-southeast-2.amazonaws.com/assignment1/n11647485-server latest 526d35410be2 6 hours ago 273MB
  assignment1/n11647485-server

### Docker image running on EC2

- **EC2 instance ID:** i-0792cfeddb210c09b
- **Video timestamp:**

### User login functionality

- **One line description:** User is able to login the front end application, handled it by hardcoding the credentials and able to login to see all possible video convertion capability
  If logged in as non admin user, user will have limited capability to convert the video
- **Video timestamp:**
- ## **Relevant files:** All Client based components are inside /Client directory

### User dependent functionality

- **One line description:** Admin User will have capability to convert all video formats non admin have limited capablity.
- **Video timestamp:**
- ## **Relevant files:** auth/login inside /server directory

### Web client

- **One line description:** Developed using React and Bootstrap library for styling
- **Video timestamp:**
- ## **Relevant files:** /Client - src/Login.js src/VideoConverter.js

### REST API

- **One line description:** Have very basic api to handle the operation by utilising fetch

- **Video timestamp:**
- ## **Relevant files:** /convert and /login inside routes folder of /server directory

### Two kinds of data

#### First kind

- **One line description:**
- **Type:**
- **Rationale:**
- **Video timestamp:**
- ## **Relevant files:**

#### Second kind

- **One line description:**
- **Type:**
- **Rationale:**
- **Video timestamp:**
- ## **Relevant files:**

### CPU intensive task

- **One line description:** If we upload the video file of very large file to convert it will cause high cpu utilisation.
- **Video timestamp:**
- ## **Relevant files:**

### CPU load testing method

- **One line description:**
- **Video timestamp:**
- ## **Relevant files:**

## Additional criteria

### Extensive REST API features

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Use of external API(s)

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Extensive web client features

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Sophisticated data visualisations

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Additional kinds of data

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Significant custom processing

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Live progress indication

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Infrastructure as code

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**

### Other

- **One line description:** Not attempted
- **Video timestamp:**
- ## **Relevant files:**
