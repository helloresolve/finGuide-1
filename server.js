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
  session: String,
  moduleId: Number,
  reply: String
});

User = mongoose.model('user', userSchema);

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', express.static(path.join(__dirname, '/public')));



app.post('/api/pushToDB', (req, res)=> {
   let session = req.body.session;
   let moduleId = req.body.moduleID;
   let reply = req.body.reply;

    User.create({session: session, moduleId: moduleId, reply: reply}, function (err, response) {
        if (err) console.log(err);
        console.log("response", response)
    })
    res.send("Saved ish");
})
// start server
app.listen(port);
console.log('Listening on port ' + port + '...');