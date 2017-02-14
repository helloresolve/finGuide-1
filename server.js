var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
app.use(morgan('dev'));


//mongoose.connect('replace');


// define user schema
var userSchema = mongoose.Schema({
  motionAiResponse: String
});

User = mongoose.model('user', userSchema);



// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// start server
app.listen(3000);
console.log('Listening on port ' + 3000 + '...');