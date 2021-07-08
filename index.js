const fs = require('fs');
const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);

const router = express.Router();

router.get('/', (_, res) => {
	console.log(raw_data);
	res.send(raw_data);
});

app.use(router);
app.listen(3000);
