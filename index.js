//const coutryData = JSON.parse(fs.readFileSync('newData.json'));
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://127.0.0.1:9000',
		methods: ['GET', 'POST'],
		credentials: true,
	},
});

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
	console.log(socket.id);
});

server.listen(3000, () => {
	console.log('Server listening on Port: 3000');
});
