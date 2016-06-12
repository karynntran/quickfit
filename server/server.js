var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	fitnessController = require('./controllers/fitnessController'),
	app = express();


app.use(express.static(path.join(__dirname, '../app/dist')));
app.use(bodyParser.json())
app.use('/api', fitnessController)
app.listen(7777, function(){
	console.log('Listening on port',7777);
})

mongoose.connect('mongodb://localhost/fitnessfinder');