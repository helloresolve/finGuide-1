pp.post('/api/pushToDB', (req, res)=> {
   let sessionId = req.body.session;

User.findOne({sessionId: req.body.session}, function(err, user) {
    if (err) {
        User.create({sessionId: session, name: req.body.reply}, function (err, response) {
          if (err) console.log(err);
        })
    } else {   
      User.update({email: req.body.email}, function (err, response) {
          if (err) console.log(err);
        })
    }
  });

    res.send("Saved ish");