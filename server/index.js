const express = require("express");
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  expressFileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
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
