const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;


router.get('/test', function(req, res){
	res.send('OK');
});

app.get('/', function (req, res) {
	// res.send('Hello from My Express Server!');
	console.log(`get`);
	res.sendFile(path.join(__dirname+'/index.html'));
});


app.use('/', router);
app.listen(port,hostname, function () {
	console.log(`Express server is running at http://${hostname}:${port}/`);
});






