var express = require('express');
var router = express.Router();

/* GET all lists. */
router.get('/', function(req, res, next) {
    res.render('./lists/index', { title: 'My Lists' });
});

module.exports = router;