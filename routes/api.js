var express = require('express');
var router = express.Router();
var fs = require("fs");
var appRoot = require('app-root-path');

var people = [
  {
    "name": "Matt Zabriskie",
    "github": "mzabriskie",
    "twitter": "mzabriskie",
    "avatar": "199035"
  },
  {
    "name": "Ryan Florence",
    "github": "rpflorence",
    "twitter": "ryanflorence",
    "avatar": "100200"
  },
  {
    "name": "Kent C. Dodds",
    "github": "kentcdodds",
    "twitter": "kentcdodds",
    "avatar": "1500684"
  },
  {
    "name": "Chris Esplin",
    "github": "deltaepsilon",
    "twitter": "chrisesplin",
    "avatar": "878947"
  }
];


router.get('/booklist', function (req, res) {
	console.log("appRoot", appRoot);

	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
		console.log( data );

		res.end( data );
	});
})

module.exports = router;

