const express = require("express");
const router = express.Router();

// GET /comments
router.get("/", (req, res) => {
  // Placeholder response until comments data is implemented
  res.json({ message: "Comments endpoint. Placeholder response." });
});

module.exports = router;
