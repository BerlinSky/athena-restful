var express = require('express');
var router = express.Router();
var fs = require("fs");
var appRoot = require('app-root-path');
var _ = require('lodash');

router.get('/booklist', function (req, res) {
	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
		var jsonData = JSON.parse(data);
		var booklist = JSON.stringify(jsonData.booklist);
		console.log( booklist );

		res.end( booklist );
	});
})

// router.get('/booklist/:id', function (req, res) {
// 	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
// 		var jsonData = JSON.parse(data);
// 		var booklist = jsonData.booklist;
// 		var bookId = parseInt(req.params.id);
// 		var jsonBook = _.find(booklist, ['id', bookId]);
// 		var book = JSON.stringify(jsonBook);

// 		res.end( book );
// 	});
// })

router.get('/booklist/:title', function (req, res) {
	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
		var jsonData = JSON.parse(data);
		var booklist = jsonData.booklist;
		var bookTitle = req.params.title.trim();
		var jsonBook = _.find(booklist, ['title', bookTitle]);
		var book = JSON.stringify(jsonBook);

		res.end( book );
	});
})

module.exports = router;

var newBook = {
  "id" : 9,
  title: "Eden",
	author: "John Steinbeck",
	description: "An epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads.",
	imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51IeBzZguDL.jpg",
	'imageUrl-local': "./images/the-grapes-of-wrath.jpg"
}

router.get('/addBook', function (req, res) {
	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
		var jsonData = JSON.parse(data);
		var booklist = jsonData.booklist;
		booklist.push(newBook);
		booklist = JSON.stringify(jsonData.booklist);
		console.log( booklist );

		res.end( booklist );
	});
})

router.get('/deleteBook', function (req, res) {
	fs.readFile(appRoot + "/data/" + "athena.json", 'utf8', function (err, data) {
		var jsonData = JSON.parse(data);
		var booklist = jsonData.booklist;
		booklist = _.pullAllBy(booklist, [{'id': 2}], 'id');
		booklist = JSON.stringify(jsonData.booklist);
		console.log( booklist );

		res.end( booklist );
	});
})

