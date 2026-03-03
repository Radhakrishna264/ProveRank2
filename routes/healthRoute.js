const express = require("express");
const router = express.Router();
const getDBStatus = require("../utils/dbStatus");

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ProveRank Backend Running",
    database: getDBStatus(),
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
