let mongoose = require('mongoose');

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

User = mongoose.model('user', userSchema);


module.exports = User;