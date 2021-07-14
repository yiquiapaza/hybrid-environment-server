const express = require('express');
const fs = require('fs');
const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));
const app = express();
const router = express.Router();

app.use(express.json());

let country = { country: '', status: 0 };

router.get('/', (_, res) => {
	console.log(raw_data);
	res.send(raw_data);
});

router.post('/', (req, res) => {
	country = req.body;
	res.status(200);
});

app.use(router);
app.listen(3000);
