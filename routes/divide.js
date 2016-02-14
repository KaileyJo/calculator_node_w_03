var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var numberX = parseInt(req.body.x)
    //console.log('I am numberX ' + numberX);
    var numberY = parseInt(req.body.y);
    //console.log('I am numberY ' + numberY);
    var division = numberX / numberY;
    division = division.toString();
    //console.log('I am maths ' + division);
    res.send(division);
});

module.exports = router;