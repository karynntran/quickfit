var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname, '../app/dist')));
app.listen(7777, function(){
	console.log('Listening on port',7777);
})