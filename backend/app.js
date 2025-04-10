const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const questionRoutes = require("./routes/questionRoutes");
const handleSocket = require("./socket/socketHandler");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/questions", questionRoutes);

// MongoDB connection
connectDB();

// Socket.io
io.on("connection", (socket) => handleSocket(socket, io));

// Start server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
