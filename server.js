var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

// app.listen(8081);
// console.log('API is running on port 3000');

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("API is running at http://%s:%s", host, port)
});


