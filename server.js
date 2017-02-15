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
  email: String,
  knowWhereToStart: String,
  totalDebt: String,
  averageInterestRate: String,
  monthlyDebtPayments: String,
  incomeYN: String,
  incomeAmount: String,
  incomeConsistency: String,
  situationDetail: String,
  stressLevel: String,
  email2: String
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

  // look up session and create if doesn't exist  
  User.findOne({sessionId: req.body.session}, function(err, user) {
    console.log("user", user);
    if (!user) {
        console.log("not found, creating new session...")
        User.create({sessionId: req.body.session}, function (err, response) {

          // email included since needs to only add first response after session created
          if (req.body.moduleID === '394253' ) {
            console.log("email provided", JSON.stringify(req.body.reply));
            User.update({email: JSON.stringify(req.body.reply)}, function(err,result){
              if (err) console.log("error", err);
              console.log("done updating...", result);
            });
          };
       })
    } 


    // know where to start
    if (req.body.moduleID === '394313' ) {
      console.log("know where to start provided", JSON.stringify(req.body.reply));
      User.update({knowWhereToStart: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // total debt amount
    if (req.body.moduleID === '394231' ) {
      console.log("total debt provided", JSON.stringify(req.body.reply));
      User.update({totalDebt: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // average interest
    if (req.body.moduleID === '394235' ) {
      console.log("average interest provided", JSON.stringify(req.body.reply));
      User.update({averageInterestRate: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // monthly debt payments
    if (req.body.moduleID === '394236' ) {
      console.log("monthly debt payments", JSON.stringify(req.body.reply));
      User.update({monthlyDebtPayments: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // income (y/n)
    if (req.body.moduleID === '394074' ) {
      console.log("income (yes or no)", JSON.stringify(req.body.reply));
      User.update({incomeYN: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // income amount
    if (req.body.moduleID === '394076' ) {
      console.log("income amount", JSON.stringify(req.body.reply));
      User.update({incomeAmount: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // income consistency
    if (req.body.moduleID === '394088' ) {
      console.log("income consistency", JSON.stringify(req.body.reply));
      User.update({incomeConsistency: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };


    // stress level
    if (req.body.moduleID === '386455' ) {
      console.log("stress level", JSON.stringify(req.body.reply));
      User.update({stressLevel: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };

    // situation detail NOT USED
    if (req.body.moduleID === '386456' ) {
      console.log("explain situation or questiosn", JSON.stringify(req.body.reply));
      User.update({situationDetail: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };


    // situation detail NOT USED
    if (req.body.moduleID === '386458' ) {
      console.log("email 2 provided", JSON.stringify(req.body.reply));
      User.update({email2: JSON.stringify(req.body.reply)}, function(err,result){
        console.log("done updating...");
      });
    };
  }); // close db entry

  res.send("Saved ish");

})
// start server
app.listen(port);
console.log('Listening on port ' + port + '...');