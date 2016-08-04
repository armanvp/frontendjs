var port = 2000;
var express = require('express');
var app = express();

// Set document root
app.use(express.static(__dirname + '/public'));

// Listen to the specified Port
app.listen(port, function(){ console.log('Listening at port '+port) });
