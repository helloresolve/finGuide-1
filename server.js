var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
app.use(morgan('dev'));


mongoose.connect('mongodb://finGuide:Finguide123@ds157667.mlab.com:57667/heroku_326pqxss');


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


app.use('/', express.static('public'))


app.get('/api/pushToDB', (req, res)=> {
    console.log("trying to push to DB...")

    User.create({motionAiResponse: "Hello"}, function (err, response) {
        if (err) return handleError(err);
        console.log("response", response)
    })
    res.send("Saved ish");
})
// start server
app.listen(3000);
console.log('Listening on port ' + 3000 + '...');