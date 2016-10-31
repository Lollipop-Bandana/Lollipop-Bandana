var controller = require('./controller');
var router = require('express').Router();

router.get('/userprofile', controller.users.getOne);

router.get('/usermatches', controller.users.getMatches);

router.get('/mainapp', controller.users.getMatches);

router.post('/baseform', controller.users.postOne);

router.post('/have', controller.have.postOne);

router.post('/looking', controller.looking.postOne);

module.exports = router;
