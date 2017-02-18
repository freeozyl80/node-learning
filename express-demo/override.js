var express = require('express')
var methodOverride = require('method-override')
var app = express()

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(function (req, res) {
	if (req.method == 'PUT') {
		console.log(0);
		res.end(0);
	}
})
app.listen(8080);