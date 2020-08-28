var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();

var data = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const originalUrl = (req, res, next) => {
	console.log('Request URL: ', req.originalUrl);
	next();
};

router.get('/', [originalUrl], (req, res) => {
	res.send('Hello wordl');
});

router.get('/data', [originalUrl], (req, res) => {
	res.send(data);
});

router.post('/data', [originalUrl], (req, res) => {
	data = req.body;
	console.log(data);
	res.status(201).end();
});

app.use(router);

app.listen(3000);
