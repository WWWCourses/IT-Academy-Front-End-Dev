var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  items = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TODO_DB');
// mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error on test:'));
db.once('open', function() {
  console.log(`Successfully connected to test mongodb`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);