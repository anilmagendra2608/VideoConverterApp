import React, { useState } from "react";

function VideoConverter() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("mp4");

  const handleConvert = () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("to", format);

    fetch("/convert", {
      method: "POST",
      headers: {
        Authorization: token, // Token sent for authentication
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Conversion failed");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `output.${format}`;
        a.click();
      })
      .catch((error) => {
        console.error(error);
        alert("Conversion failed");
      });
  };

  return (
    <div>
      <h2>Video Conversion Application</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="mp4">MP4</option>
        <option value="flv">FLV</option>
        <option value="webm">WEBM</option>
        <option value="mov">MOV</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default VideoConverter;
