module.exports = {
  dbLogger: function (req, res) {

    console.log("routes loaded...");

    let sessionId = {sessionId: req.body.session};
    let options = { upsert: true, setDefaultsOnInsert: true};

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