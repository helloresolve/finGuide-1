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
  sessionId: String//,
  // email: String,
  // knowWhereToStart: String,
  // totalDebt: String,
  // averageInterestRate: String,
  // monthlyDebtPayments: String,
  // incomeYN: String,
  // incomeAmount: String,
  // incomeConsistency: String,
  // situationDetail: String,
});

User = mongoose.model('user', userSchema);

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// redirect an potential user to stub html page
app.use('/', express.static(path.join(__dirname, '/public')));

// API route for webhooks
app.post('/api/pushToDB', (req, res)=> {
  console.log("trying to add to db...");

  // look up session and create if doesn't exist  
  User.findOne({sessionId: req.body.session}, function(err, session) {
    console.log("sessionID", session);

    //if session is undefined, create one 
    if (!session) {
        console.log("session not found, creating new session...")
        User.create({ sessionId: req.body.session//,                          
                      // email: null,
                      // knowWhereToStart: null,
                      // totalDebt: null,
                      // averageInterestRate: null,
                      // monthlyDebtPayments: null,
                      // incomeYN: null,
                      // incomeAmount: null,
                      // incomeConsistency: null,
                      // situationDetail: null
                    }, function (err, response) {
                      console.log("response from creating user:", response)
       })
    } 


    // email included since needs to only add first response after session created
    if (req.body.moduleID === '394253' ) {
      console.log("email provided", req.body.reply);
      User.update({email: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };


    // know where to start
    if (req.body.moduleID === '394313' ) {
      console.log("know where to start provided", req.body.reply);
      User.update({knowWhereToStart: req.body.reply}, function(err,result){
        console.log("done updating...", result);
      });
    };

    // total debt amount
    if (req.body.moduleID === '394231' ) {
      console.log("total debt provided", req.body.reply);
      User.update({totalDebt: req.body.reply}, function(err,result){
        console.log("done updating...", result);
      });
    };

    // average interest
    if (req.body.moduleID === '394235' ) {
      console.log("average interest provided", req.body.reply);
      User.update({averageInterestRate: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };

    // monthly debt payments
    if (req.body.moduleID === '394236' ) {
      console.log("monthly debt payments", req.body.reply);
      User.update({monthlyDebtPayments: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };

    // income (y/n)
    if (req.body.moduleID === '394074' ) {
      console.log("income (yes or no)", req.body.reply);
      User.update({incomeYN: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };

    // income amount
    if (req.body.moduleID === '394076' ) {
      console.log("income amount", req.body.reply);
      User.update({incomeAmount: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };

    // income consistency
    if (req.body.moduleID === '394088' ) {
      console.log("income consistency", req.body.reply);
      User.update({incomeConsistency: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };


    // situation detail
    if (req.body.moduleID === '396899' ) {
      console.log("explain situation or questiosn", req.body.reply);
      User.update({situationDetail: req.body.reply}, function(err,result){
        console.log("done updating...");
      });
    };



  }); // close db entry

  res.send("Saved ish");

})
// start server
app.listen(port);
console.log('Listening on port ' + port + '...');