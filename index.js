var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var fs = require('fs');

var coutryData = JSON.parse(fs.readFileSync('newData.json'));

var router = express.Router();

var data = { country_code: 0 };
var year = { year: 1950 };

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

router.post('/axis', [originalUrl], (req, res) => {
	let data = req.body;

	res.status(200).json({ message: 'ok' });
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

router.get('/year/:name', [originalUrl], (req, res) => {
	var name = req.params.name;
	var out = coutryData.filter(
		(country) => country.name === name && country.year === year.year
	);
	res.send(out[0]);
});

router.post('/year', [originalUrl], (req, res) => {
	year = req.body;
	console.log(year);
	res.status(200).end();
});

app.use(router);

app.listen(3000);
