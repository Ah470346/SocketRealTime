
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require('fs');

var dir = path.join(__dirname, 'public');

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', function(req,res){
	res.send('hello');
});

//------------------------socket

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected with id: ', socket.id);

  socket.on("disconnect", ()=>{
    console.log("user id: " + socket.id + " was disconnected!");
  }); 
});

server.listen(port , function(){
  console.log('server listening on port ' + port);
});