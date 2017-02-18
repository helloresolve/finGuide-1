let mongoose = require('mongoose');

mongoose.connect('mongodb://finGuide:Finguide123@ds157667.mlab.com:57667/heroku_326pqxss');


/************************** 
 * Schema for chatbot v2  *
 * ***********************/


// new table schema
var crnBotv2Schema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  sessionId: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  knowWhereToStart: {
    type: String,
    default: null
  },
  totalDebt: {
    type: String,
    default: null
  },
  averageInterestRate: {
    type: String,
    default: null
  },
  monthlyDebtPayments: {
    type: String,
    default: null
  },
  incomeYN: {
    type: String,
    default: null
  },
  incomeAmount: {
    type: String,
    default: null
  },
  incomeConsistency: {
    type: String,
    default: null
  },
  situationDetail: {
    type: String,
    default: null
  },
  houseHoldSize: {
    type: String,
    default: null
  },
  homeEquity: {
    type: String,
    default: null
  },
  ownHome: {
    type: String,
    default: null
  },
  behindOnPayments: {
    type: String,
    default: null
  },
  daysPastDue: {
    type: String,
    default: null
  },
  firstName: {
    type: String,
    default: null
  }

});

/************************** 
 * Schema for chatbot v1  *
 * ***********************/

var userSchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  sessionId: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  knowWhereToStart: {
    type: String,
    default: null
  },
  totalDebt: {
    type: String,
    default: null
  },
  averageInterestRate: {
    type: String,
    default: null
  },
  monthlyDebtPayments: {
    type: String,
    default: null
  },
  incomeYN: {
    type: String,
    default: null
  },
  incomeAmount: {
    type: String,
    default: null
  },
  incomeConsistency: {
    type: String,
    default: null
  },
  situationDetail: {
    type: String,
    default: null
  }
});


User = mongoose.model('user', userSchema);
CrnBotv2 = mongoose.model('crnBotv2', crnBotv2Schema);


module.exports.User = User;
module.exports.CrnBotv2 = CrnBotv2;