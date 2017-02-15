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
  sessionId: {type:String, default: null},
  email: {type:String, default: null},
  knowWhereToStart: {type:String, default: null},
  totalDebt: {type:String, default: null},
  averageInterestRate: {type:String, default: null},
  monthlyDebtPayments: {type:String, default: null},
  incomeYN: {type:String, default: null},
  incomeAmount: {type:String, default: null},
  incomeConsistency: {type:String, default: null},
  situationDetail: {type:String, default: null}
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
  
  let sessionId = {sessionId: req.body.session};
  let options = { upsert: true };




  // email provided
  if (req.body.moduleID === '394253' ) {
    User.findOneAndUpdate(sessionId, {email: req.body.reply}, options, function(err, result) {
      console.log(result)
    })
  };


  // know where to start
  if (req.body.moduleID === '394313' ) {
    User.findOneAndUpdate(sessionId, {knowWhereToStart: req.body.reply}, options, function(err, result) {
     console.log(result)
    })
  };

  // total debt amount
  if (req.body.moduleID === '394231' ) {
    User.findOneAndUpdate(sessionId, {totalDebt: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // average interest
  if (req.body.moduleID === '394235' ) {
    User.findOneAndUpdate(sessionId, {averageInterestRate: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // monthly debt payments
  if (req.body.moduleID === '394236' ) {
    User.findOneAndUpdate(sessionId, {monthlyDebtPayments: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // income (y/n)
  if (req.body.moduleID === '394074' ) {
      User.findOneAndUpdate(sessionId, {incomeYN: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // income amount
  if (req.body.moduleID === '394076' ) {
    User.findOneAndUpdate(sessionId, {incomeAmount: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // income consistency
  if (req.body.moduleID === '394088' ) {
    User.findOneAndUpdate(sessionId, {incomeConsistency: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };

  // situation detail
  if (req.body.moduleID === '396899' ) {
    User.findOneAndUpdate(sessionId, {situationDetail: req.body.reply}, options, function(err, result) {
      console.log(result);
    })
  };


  res.send("Saved ish");

}); // close db entry

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');



