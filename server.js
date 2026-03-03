require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const healthRoute = require("./routes/healthRoute");

const app = express();

app.use(express.json());
app.use("/api", healthRoute);
app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("Socket Connected:", socket.id);
  socket.emit("serverMessage", "Socket.io Connected Successfully");
  socket.on("disconnect", () => {
    console.log("Socket Disconnected:", socket.id);
  });
});

/* IMPORTANT: KEEP FALLBACK */
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
});
