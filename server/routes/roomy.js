var express = require('express');
var roomyController = require('../../db/controllers/roomy.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    // use roomyController methods here
  });

module.exports = router;
