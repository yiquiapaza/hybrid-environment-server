// core dep
import express from 'express';
import fs from 'fs';

const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));

// express config
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded());


// global
let country = { name: '', state: 0 };
let rotation = { x: 0, y: 0, z: 0 };

// TODO:
// Create GET and POST position service URL
// Create GET and POST rotation service URL
// Create a hook for interaction or maybe just a new URL for GET and POST information about elements
// Create log for eeach event

router.post('/', (req, res) => {
	console.log(req.body);
	res.status(200).send('Success');
})

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

router.post('/rotation', (req, res) => {
	//console.log(req.body);
	rotation = req.body;
	//console.log(rotation)
	res.status(200).send('Success');
});

// [x]  Cr
router.get('/rotation',(req, res) => {
	rotation.x = parseFloat(rotation.x);
	rotation.y = parseFloat(rotation.y);
	rotation.z = parseFloat(rotation.z);
	res.status(200).send(rotation);
})

app.use(router);
app.listen(3000);
