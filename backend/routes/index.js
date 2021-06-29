var express = require('express');
var router = express.Router();
var user = require('../Controller/user.js');

/* GET home page. */
router.post('/login', user.login);

router.get('/users', user.users);

router.post('/addUser', user.addUser);

module.exports = router;
