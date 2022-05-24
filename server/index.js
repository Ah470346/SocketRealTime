const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

var dir = path.join(__dirname, "public");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello");
});

//------------------------socket

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.removeAllListeners();

io.on("connection", (socket) => {
  console.log("a user connected with id: ", socket.id);
  socket.on("disconnect", () => {
    console.log("user id: " + socket.id + " was disconnected!");
  });

  socket.on("name", (mgs) => {
    if (mgs === "truong") {
      socket.join("p1");
      let i = 0;
      const clear = setInterval(() => {
        console.log(kichban.k1[i]);
        io.to("p1").emit("doclenh", kichban.k1[i]);
        i++;
        if (kichban.k1.length === i + 1) {
          clearInterval(clear);
        }
      }, 5000);
    }
  });
});

server.listen(port, function () {
  console.log("server listening on port " + port);
});

const kichban = {
  k1: ["1", "2", "3", "4"],
  k2: ["5", "4", "3", "2"],
};
