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

  console.log("request looks like", request.body);

// name response
    
  User.findOne({sessionId: req.body.session}, function(err, user) {
    console.log("user", user);
    if (!user) {
        console.log("not found, creating new session")
        User.create({sessionId: req.body.session}, function (err, response) {
          if (err) console.log(err);
        })
    } 
    if (req.body.moduleID === '393835' ) {
      console.log("name provided", req.body.reply);
      User.update({name: req.body.reply}, function(err,result){
        console.log("done updating name");
      });
    };

    if (req.body.moduleID === '393884' ) {
        console.log("email provided", req.body.reply);
        User.update({email: req.body.reply}, function(err,result){
          console.log("done updating email");
        });
      }

    }); // close db entry

  res.send("Saved ish");

})
// start server
app.listen(port);
console.log('Listening on port ' + port + '...');