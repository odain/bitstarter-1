var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  var buf = new Buffer(256); 
  var len = buf.write(data,0);
  response.send(buf.toString('utf8', 0, len));
  //response.send(data);
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
