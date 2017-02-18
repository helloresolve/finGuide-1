let Tables = require('./model.js');


module.exports = {
  dbLogger: function (req, res) {

    console.log("routes loaded...");

    let sessionId = {sessionId: req.body.session};
    let options = {upsert: true, setDefaultsOnInsert: true};


    /************************************ 
     * These are routes for chatbot v2  *
     * *********************************/


    // email provided
    if (req.body.moduleID ==='402680' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {email: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // know where to start
    if (req.body.moduleID === '402681' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {knowWhereToStart: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // total debt amount
    if (req.body.moduleID === '402677' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {totalDebt: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // average interest
    if (req.body.moduleID === '402678' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {averageInterestRate: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // monthly debt payments
    if (req.body.moduleID === '402679' ) {
      console.log("monthly debt triggered...")
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {monthlyDebtPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income (y/n)
    if (req.body.moduleID === '402673' ) {
        Tables.CrnBotv2.findOneAndUpdate(sessionId, {incomeYN: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income amount
    if (req.body.moduleID === '402674' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {incomeAmount: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income consistency
    if (req.body.moduleID === '402675' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {incomeConsistency: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // situation detail
    if (req.body.moduleID === '402682' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {situationDetail: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    /* new quetions */

    // number in  household
    if (req.body.moduleID === '402891' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {houseHoldSize: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // estimated home equity 
    if (req.body.moduleID === '402889' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {homeEquity: req.body.reply}, options, (err, result) => { console.log(result); })
    };


    // own Home  
    if (req.body.moduleID === '402879' ) {
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {ownHome: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // behind on payments  
    if (req.body.moduleID === '408193' ) {
      console.log("behind on payments triggered. Reply looks like:", req.body.reply);
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {behindOnPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // days past due on payments  
    if (req.body.moduleID === '402782' ) {
      console.log("days past due triggered. Reply looks like:", req.body.reply);
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {daysPastDue: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // firstName provided
    if (req.body.moduleID ==='402733' ) {
       console.log("first name triggered. Reply looks like:", req.body.reply);
      Tables.CrnBotv2.findOneAndUpdate(sessionId, {firstName: req.body.reply}, options, (err, result) => { console.log(result)})
    };



    /************************************ 
     * These are routes for chatbot v1  *
     * *********************************/

    // email provided
    if (req.body.moduleID ==='394253' ) {
      Tables.User.findOneAndUpdate(sessionId, {email: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // know where to start
    if (req.body.moduleID === '394313' ) {
      Tables.User.findOneAndUpdate(sessionId, {knowWhereToStart: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // total debt amount
    if (req.body.moduleID === '394231' ) {
      Tables.User.findOneAndUpdate(sessionId, {totalDebt: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // average interest
    if (req.body.moduleID === '394235' ) {
      Tables.User.findOneAndUpdate(sessionId, {averageInterestRate: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // monthly debt payments
    if (req.body.moduleID === '394236' ) {
      Tables.User.findOneAndUpdate(sessionId, {monthlyDebtPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income (y/n)
    if (req.body.moduleID === '394074' ) {
        Tables.User.findOneAndUpdate(sessionId, {incomeYN: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income amount
    if (req.body.moduleID === '394076' ) {
      Tables.User.findOneAndUpdate(sessionId, {incomeAmount: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income consistency
    if (req.body.moduleID === '394088' ) {
      Tables.User.findOneAndUpdate(sessionId, {incomeConsistency: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // situation detail
    if (req.body.moduleID === '396899' ) {
      Tables.User.findOneAndUpdate(sessionId, {situationDetail: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    res.send("Saved ish");

  } // close db entry

};