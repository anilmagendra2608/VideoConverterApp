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
        Authorization: token,
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Video Conversion Application</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.input}
        />
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          style={styles.select}
        >
          <option value="mp4">MP4</option>
          <option value="flv">FLV</option>
          <option value="webm">WEBM</option>
          <option value="mov">MOV</option>
        </select>
        <button onClick={handleConvert} style={styles.button}>
          Convert
        </button>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
  },
  logoutButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default VideoConverter;
