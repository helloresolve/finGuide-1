var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
app.use(morgan('dev'));

var findOneOrCreate = require('mongoose-find-one-or-create');

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
});


userSchema.plugin(findOneOrCreate);


User = mongoose.model('user', userSchema);

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', express.static(path.join(__dirname, '/public')));

app.post('/api/pushToDB', (req, res)=> {


  // email provided
  if (req.body.moduleID === '394253' ) {
    console.log("email provided", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {email: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };


  // know where to start
  if (req.body.moduleID === '394313' ) {
    console.log("know where to start provided", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {knowWhereToStart: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // total debt amount
  if (req.body.moduleID === '394231' ) {
    console.log("total debt provided", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {totalDebt: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // average interest
  if (req.body.moduleID === '394235' ) {
    console.log("average interest provided", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {averageInterestRate: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // monthly debt payments
  if (req.body.moduleID === '394236' ) {
    console.log("monthly debt payments", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {monthlyDebtPayments: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // income (y/n)
  if (req.body.moduleID === '394074' ) {
    console.log("income (yes or no)", req.body.reply);
      User.findOneOrCreate({sessionId: req.body.session}, {incomeYN: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // income amount
  if (req.body.moduleID === '394076' ) {
    console.log("income amount", req.body.reply);
    User.findOneOrCreate({sessionId: req.body.session}, {incomeAmount: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // income consistency
  if (req.body.moduleID === '394088' ) {
    User.findOneOrCreate({sessionId: req.body.session}, {incomeConsistency: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  // situation detail
  if (req.body.moduleID === '396899' ) {
    User.findOneOrCreate({sessionId: req.body.session}, {situationDetail: req.body.reply}, function(err, result) {
      console.log(result);
    })
  };

  res.send("Saved ish");

}); // close db entry

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');