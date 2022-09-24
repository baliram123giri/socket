const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log("success", socket);
});

httpServer.listen(3000, () => {
  console.log("Connection port: 3000");
});
