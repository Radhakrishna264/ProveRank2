require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ProveRank Backend Running – Stage 0 Complete" });
});

app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("Socket Connected:", socket.id);
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
