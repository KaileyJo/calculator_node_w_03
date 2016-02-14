var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var numberX = parseInt(req.body.x)
    //console.log('I am numberX ' + numberX);
    var numberY = parseInt(req.body.y);
    //console.log('I am numberY ' + numberY);
    var addition = numberX + numberY;
    addition = addition.toString();
    //console.log('I am maths ' + addition);
    res.send(addition);
});

module.exports = router;
