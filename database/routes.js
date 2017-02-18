module.exports = {
  dbLogger: function (req, res) {

    console.log("routes loaded...");

    let sessionId = {sessionId: req.body.session};
    let options = { upsert: true, setDefaultsOnInsert: true};


    /************************************ 
     * These are routes for chatbot v2  *
     * *********************************/

    // email provided
    if (req.body.moduleID ==='402733' ) {
      crnBotv2.findOneAndUpdate(sessionId, {email: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // know where to start
    if (req.body.moduleID === '402680' ) {
      crnBotv2.findOneAndUpdate(sessionId, {knowWhereToStart: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // total debt amount
    if (req.body.moduleID === '402677' ) {
      crnBotv2.findOneAndUpdate(sessionId, {totalDebt: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // average interest
    if (req.body.moduleID === '402678' ) {
      crnBotv2.findOneAndUpdate(sessionId, {averageInterestRate: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // monthly debt payments
    if (req.body.moduleID === '402679' ) {
      crnBotv2.findOneAndUpdate(sessionId, {monthlyDebtPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income (y/n)
    if (req.body.moduleID === '402673' ) {
        crnBotv2.findOneAndUpdate(sessionId, {incomeYN: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income amount
    if (req.body.moduleID === '402674' ) {
      crnBotv2.findOneAndUpdate(sessionId, {incomeAmount: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income consistency
    if (req.body.moduleID === '402675' ) {
      crnBotv2.findOneAndUpdate(sessionId, {incomeConsistency: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // situation detail
    if (req.body.moduleID === '402682' ) {
      crnBotv2.findOneAndUpdate(sessionId, {situationDetail: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    /* new quetions */

    // number in  household
    if (req.body.moduleID === '402891' ) {
      crnBotv2.findOneAndUpdate(sessionId, {houseHoldSize: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // estimated home equity 
    if (req.body.moduleID === '402889' ) {
      crnBotv2.findOneAndUpdate(sessionId, {homeEquity: req.body.reply}, options, (err, result) => { console.log(result); })
    };


    // own Home  
    if (req.body.moduleID === '402879' ) {
      crnBotv2.findOneAndUpdate(sessionId, {ownHome: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // behind on payments  
    if (req.body.moduleID === '402781' ) {
      crnBotv2.findOneAndUpdate(sessionId, {behindOnPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // days past due on payments  
    if (req.body.moduleID === '402782' ) {
      crnBotv2.findOneAndUpdate(sessionId, {daysPastDue: req.body.reply}, options, (err, result) => { console.log(result); })
    };



    /************************************ 
     * These are routes for chatbot v1  *
     * *********************************/

    // email provided
    if (req.body.moduleID ==='394253' ) {
      User.findOneAndUpdate(sessionId, {email: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // know where to start
    if (req.body.moduleID === '394313' ) {
      User.findOneAndUpdate(sessionId, {knowWhereToStart: req.body.reply}, options, (err, result) => { console.log(result)})
    };

    // total debt amount
    if (req.body.moduleID === '394231' ) {
      User.findOneAndUpdate(sessionId, {totalDebt: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // average interest
    if (req.body.moduleID === '394235' ) {
      User.findOneAndUpdate(sessionId, {averageInterestRate: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // monthly debt payments
    if (req.body.moduleID === '394236' ) {
      User.findOneAndUpdate(sessionId, {monthlyDebtPayments: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income (y/n)
    if (req.body.moduleID === '394074' ) {
        User.findOneAndUpdate(sessionId, {incomeYN: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income amount
    if (req.body.moduleID === '394076' ) {
      User.findOneAndUpdate(sessionId, {incomeAmount: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // income consistency
    if (req.body.moduleID === '394088' ) {
      User.findOneAndUpdate(sessionId, {incomeConsistency: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    // situation detail
    if (req.body.moduleID === '396899' ) {
      User.findOneAndUpdate(sessionId, {situationDetail: req.body.reply}, options, (err, result) => { console.log(result); })
    };

    res.send("Saved ish");

  } // close db entry

};