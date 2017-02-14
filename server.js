var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
app.use(morgan('dev'));

mongoose.connect('mongodb://finGuide:Finguide123@ds157667.mlab.com:57667/heroku_326pqxss');


// define user schema
var userSchema = mongoose.Schema({
  sessionId: String,
  name: String,
  email: String
});

User = mongoose.model('user', userSchema);

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', express.static(path.join(__dirname, '/public')));


app.post('/api/pushToDB', (req, res)=> {
  console.log("trying to add to db...");

  let sessionId = req.body.session;
  User.findOne({sessionId: req.body.session}, function(err, user) {
    console.log("error", err);
    console.log("user", user);
    if (err) {
        console.log("not found, creating new entry")
        User.create({sessionId: session, name: req.body.reply}, function (err, response) {
          if (err) console.log(err);
        })
    } else {   
      console.log("existing user, adding email")
      User.update({email: req.body.email}, function (err, response) {
          if (err) console.log(err);
        })
    }
  });

  res.send("Saved ish");

})
// start server
app.listen(port);
console.log('Listening on port ' + port + '...');