const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");
const cors = require("cors"); // Import cors
const app = express();

// Use cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Your React app's URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware for sessions
app.use(
  session({
    secret: "your_secret_key", // Change this to a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  expressFileUpload({
    useTempFiles: true,
    tempFileDir: __dirname + "/tmp/",
  })
);

// Routes
const convertRoute = require("./routes/convert");
const authRoute = require("./routes/auth");
app.use("/convert", convertRoute);
app.use("/auth", authRoute);

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
