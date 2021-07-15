const express = require('express');
const fs = require('fs');
const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));
const app = express();
const router = express.Router();

app.use(express.json());

let country = { name: '', status: 0 };

router.get('/', (_, res) => {
	console.log(raw_data);
	res.send(raw_data);
});

router.get('/country', (_, res) => {
	res.status(200).send(country);
});

router.post('/country', (req, res) => {
	country = req.body;
	res.status(200).send('Success');
});

app.use(router);
app.listen(3000);
