'use strict';

const querystring = require('querystring');
const Tables = require('./model.js');


module.exports = {
  dbLogger: function (req, res) {

    console.log("routes loaded...");

    let sessionId = {sessionId: req.body.session};
    let options = {upsert: true, setDefaultsOnInsert: true};


    /************************************ 
     * These are routes for chatbot v2  *
     * *********************************/

     function updateModel(model, field) {
       Tables[model].findOneAndUpdate(sessionId, {[field]: querystring.unescape(req.body.reply)}, options, (err, result) => { console.log(result); })
     }


    // email provided
    if (req.body.moduleID ==='402680' ) {
      updateModel('CrnBotv2', 'email');
    };

    // know where to start
    if (req.body.moduleID === '402681' ) {
      updateModel('CrnBotv2', 'knowWhereToStart');
    };

    // total debt amount
    if (req.body.moduleID === '402677' ) {
      updateModel('CrnBotv2', 'totalDebt');
    };

    // average interest
    if (req.body.moduleID === '402678' ) {
      updateModel('CrnBotv2', 'averageInterestRate');
    };

    // monthly debt payments
    if (req.body.moduleID === '402679' ) {
      console.log("monthly debt triggered...")
      updateModel('CrnBotv2', 'monthlyDebtPayments');
    };

    // income (y/n)
    if (req.body.moduleID === '402673' ) {
      updateModel('CrnBotv2', 'incomeYN');
    };

    // income amount
    if (req.body.moduleID === '402674' ) {
      updateModel('CrnBotv2', 'incomeAmount');
    };

    // income consistency
    if (req.body.moduleID === '402675' ) {
      updateModel('CrnBotv2', 'incomeConsistency');
    };

    // situation detail
    if (req.body.moduleID === '402682' ) {
      updateModel('CrnBotv2', 'situationDetail');
    };

    /* new quetions */

    // number in  household
    if (req.body.moduleID === '402891' ) {
      updateModel('CrnBotv2', 'houseHoldSize');
    };

    // estimated home equity 
    if (req.body.moduleID === '402889' ) {
      updateModel('CrnBotv2', 'homeEquity');
    };


    // own Home  
    if (req.body.moduleID === '402879' ) {
      updateModel('CrnBotv2', 'ownHome');
    };

    // behind on payments  
    if (req.body.moduleID === '408193' ) {
      console.log("behind on payments triggered. Reply looks like:", req.body.reply);
      updateModel('CrnBotv2', 'behindOnPayments');
    };

    // days past due on payments  
    if (req.body.moduleID === '402782' ) {
      console.log("days past due triggered. Reply looks like:", req.body.reply);
      updateModel('CrnBotv2', 'daysPastDue');
    };

    // firstName provided
    if (req.body.moduleID ==='402733' ) {
       console.log("first name triggered. Reply looks like:", req.body.reply);
      updateModel('CrnBotv2', 'firstName');
    };



    /************************************ 
     * These are routes for chatbot v1  *
     * *********************************/

    // email provided
    if (req.body.moduleID ==='394253' ) {
      updateModel('User', 'email');
    };

    // know where to start
    if (req.body.moduleID === '394313' ) {
      updateModel('User', 'knowWhereToStart');
    };

    // total debt amount
    if (req.body.moduleID === '394231' ) {
      updateModel('User', 'totalDebt');
    };

    // average interest
    if (req.body.moduleID === '394235' ) {
      updateModel('User', 'averageInterestRate');
    };

    // monthly debt payments
    if (req.body.moduleID === '394236' ) {
      updateModel('User', 'monthlyDebtPayments');
    };

    // income (y/n)
    if (req.body.moduleID === '394074' ) {
      updateModel('User', 'incomeYN');
    };

    // income amount
    if (req.body.moduleID === '394076' ) {
      updateModel('User', 'incomeAmount');
    };

    // income consistency
    if (req.body.moduleID === '394088' ) {
      updateModel('User', 'incomeConsistency');
    };

    // situation detail
    if (req.body.moduleID === '396899' ) {
      updateModel('User', 'situationDetail');
    };

    res.send("Saved ish");

  } // close db entry

};