const express = require("express");
const router = express.Router();
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const ffmpegConfig = require("../utils/ffmpegConfig");

ffmpegConfig(); // Configure FFmpeg paths

// Middleware to check if the user has the required role
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.session.user && req.session.user.role === role) {
      next();
    } else {
      res.status(403).json({ success: false, message: "Access denied" });
    }
  };
};

// Middleware to validate conversion format based on user role
const validateFormat = (req, res, next) => {
  const allowedFormatsForAdmin = ["mp4", "flv", "webm", "mov"];
  const allowedFormatsForUser = ["mp4"];

  const requestedFormat = req.body.to;

  if (req.session.user && req.session.user.role === "admin") {
    // Admins can use all formats
    if (allowedFormatsForAdmin.includes(requestedFormat)) {
      next();
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid format for admin" });
    }
  } else {
    // Non-admins can only use mp4 format
    if (requestedFormat === "mp4") {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Non-admins can only convert to MP4",
      });
    }
  }
};

// Apply the middleware functions to the conversion route
router.post("/", validateFormat, (req, res) => {
  let to = req.body.to;
  let file = req.files.file;
  let fileName = `output.${to}`;

  console.log("to:", to);
  console.log("file:", file);
  console.log("fileName:", fileName);

  // Try accessing tmp folder before moving input file
  fs.access("tmp/", fs.constants.F_OK, (err) => {
    if (err) {
      console.log("Unable to access tmp/");
      return res.status(500).send("Temporary directory not accessible");
    }
  });

  // Upload the file to be converted
  file.mv("tmp/" + file.name, function (err) {
    if (err) return res.status(500).send(err);
    console.log("File Uploaded Successfully");

    ffmpeg("tmp/" + file.name)
      .withOutputFormat(to)
      .on("end", function () {
        console.log("Conversion Finished");

        res.download(__dirname + "/" + fileName, function (err) {
          if (err) throw err;

          fs.unlink(__dirname + "/" + fileName, function (err) {
            if (err) throw err;
            console.log("File deleted");
          });
        });

        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File Deleted");
        });
      })
      .on("error", function (err) {
        console.log("Error occurred: " + err.message);
        res.status(500).send("Conversion failed");
      })
      .saveToFile(__dirname + "/" + fileName);
  });
});

module.exports = router;
