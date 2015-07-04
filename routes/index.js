var express = require('express');
var router = express.Router();
var jsonProcessor = require('../lib/jsonProcessor');


router.post('/', function(req, res, next) {
  res.send(jsonProcessor(req.body));
});

module.exports = router;
	