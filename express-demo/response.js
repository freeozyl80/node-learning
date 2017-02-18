var express = require('express')
var responseTime = require('response-time')

var app = express()

app.use(responseTime(function(req, res, time){
	console.log(time);
}));

app.get('/', function (req, res) {
  	res.send('hello, world!')
})
app.listen(8080);