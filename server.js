var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var configureRoutes = require('./routes');
var bodyParser = require('body-parser');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.engine('hbs', mustacheExpress());
app.use('/public', express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

configureRoutes(app);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});