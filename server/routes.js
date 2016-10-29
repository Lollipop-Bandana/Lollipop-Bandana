var controller = require('./controller');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;
