var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var router = express.Router();

var data = {};
var year = {};

app.use(cors());
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
	res.status(200).end();
});

router.get('/year', [originalUrl], (req, res) => {
	res.send(year);
});

router.post('/year', [originalUrl], (req, res) => {
	year = req.body;
	console.log(year);
	res.status(200).end();
});

app.use(router);

app.listen(3000);
