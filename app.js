var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var add = require('./routes/add');
var multiply = require('./routes/multiply');
var divide = require('./routes/divide');
var subtract = require('./routes/subtract');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/add', add);
app.use('/multiply', multiply);
app.use('/divide', divide);
app.use('/subtract', subtract);

app.get('/*', function(req, res) {
    //console.log('Here is the request: ', req.params);
    var file = req.params[0] || '/public/views/index.html';
    res.sendFile(path.join(__dirname, './server/', file));
});

app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});
