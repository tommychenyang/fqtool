var express = require('express');
var app = express();
app.use('/', function(req, res){res.send('Welcom')});
app.listen(3000);