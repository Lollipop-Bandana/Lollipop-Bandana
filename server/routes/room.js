var express = require('express');
var roomController = require('../../db/controllers/room.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    // use roomController methods here
  });

module.exports = router;
