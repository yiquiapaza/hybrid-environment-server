import express from 'express';
import fs from 'fs';

const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));
const app = express();
const router = express.Router();
//$ npm install express --save
//import cors from 'cors';

//app.use(cors());
//app.use(express.json());

let country = { name: '', status: 0 };
let state = { state: 0 };
let rotation = {};

//TODO:
//	Create GET and POST position service URL
// 	Create GET and POST rotation service URL
// 	Create a hook for interaction or maybe just a new URL for GET and POST information about elements
//  Create log for eeach event

router.get('/', (_, res) => {
	console.log(raw_data);
	res.send(raw_data);
});

router.get('/country', (_, res) => {
	res.status(200).send(country);
	//country.status = 0;
});

router.post('/country', (req, res) => {
	country = req.body;
	res.status(200).send('Success');
});

router.get('/state', (_, res) => {
	res.status(200).send(state);
});

router.post('/state', (req, res) => {
	state = res.body;
	res.status(200).send('Success');
});

router.post('/rotation', (req, res) => {
	rotation = req.body;
	console.log(rotation)
	res.status(200).send('Success');
});

router.get('/rotation',(req, res) => {
	console.log(rotation);
	res.status(200).send('Success');
})

app.use(router);
app.listen(3000);
