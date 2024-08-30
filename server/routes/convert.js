const express = require("express");
const router = express.Router();
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const ffmpegConfig = require("../utils/ffmpegConfig");

ffmpegConfig(); // Configure FFmpeg paths

router.post("/", (req, res) => {
  let to = req.body.to;
  let file = req.files.file;
  let fileName = `output.${to}`;

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
