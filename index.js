
var express = require('express')
  , http = require('http');

var app = express(); 
var server = http.createServer(app);
app.use(express.static(__dirname + '/compiled'));



var io = require('socket.io')(server);

server.listen(8000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
