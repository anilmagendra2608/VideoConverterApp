/*
This is for Windows system 
const ffmpeg = require("fluent-ffmpeg");

module.exports = function () {
  ffmpeg.setFfmpegPath("C:/ffmpeg/ffmpeg-7.0.2-full_build/bin/ffmpeg.exe");
  ffmpeg.setFfprobePath("C:/ffmpeg/ffmpeg-7.0.2-full_build/bin");
  ffmpeg.setFlvtoolPath("C:/flvtool");
};
*/

const ffmpeg = require("fluent-ffmpeg");

module.exports = function () {
  ffmpeg.setFfmpegPath("/usr/bin/ffmpeg");
  ffmpeg.setFfprobePath("/usr/bin/ffprobe");
  ffmpeg.setFlvtoolPath("/path/to/flvtool");
};
