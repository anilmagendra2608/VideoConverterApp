const express = require("express");
const router = express.Router();

// For now, we'll have a dummy route
router.post("/login", (req, res) => {
  // Dummy authentication logic
  const { username, password } = req.body;

  if (username === "user" && password === "password") {
    res.json({ token: "dummy-token" });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
