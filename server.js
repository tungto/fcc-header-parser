import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
	const language = req.headers['accept-language'];
	const software = req.headers['user-agent'];
	const ipaddress = req.ip;
	res.json({
		ipaddress,
		language,
		software,
	});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});
