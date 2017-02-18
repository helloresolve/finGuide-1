//setting up
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let morgan = require('morgan');
app.use(morgan('dev'));
let port = process.env.PORT || 3000;

// import files
let routes = require ('./database/routes.js')


// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// redirect stub page for instruction
app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/api/pushToDB', routes.dbLogger);

// start server
app.listen(port);

console.log('Listening on port ' + port + '...');



