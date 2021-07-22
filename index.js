const express = require('express');
const fs = require('fs');
const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));
const app = express();
const router = express.Router();
const cors = require('cors')

app.use(cors());
app.use(express.json());

let country = { name: '', status: 0 };
let state = {state: 0};

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

router.get('/state', (_, res)=> {
	res.status(200).send(state);
})

router.post('/state', (req, res) => {
	state = res.body;
	res.status(200).send('Success')
})

app.use(router);
app.listen(3000);
