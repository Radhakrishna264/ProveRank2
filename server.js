require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

/* Base Middleware */
app.use(express.json());

/* Health Route */
app.get("/api/health", (req, res) => {
  res.json({ status: "ProveRank Backend Running – Phase 0.3 Base Ready" });
});

/* Error Handler (Last Middleware) */
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

/* Start Server After DB Connect */
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
