const express = require("express");
const router = express.Router();
const session = require("express-session");

router.use(
  session({
    secret: "your_secret_key", // Use a strong secret key in production
    resave: false,
    saveUninitialized: true,
  })
);

const users = {
  user1: { password: "password1", role: "admin" },
  user2: { password: "password2", role: "user" },
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users[username];

  if (user && user.password === password) {
    req.session.user = {
      username,
      role: user.role,
    };
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;
