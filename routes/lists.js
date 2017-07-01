var express = require('express'),
    router = express.Router(),
    List = require('../models/list');

/* GET all lists. */
router.get('/', function(req, res, next) {
    List.find({}, function(err, lists) {
        if (err) {
            res.send(err);
        } else {
            res.render('./lists/index', { title: 'My Lists', lists: lists });
        }
    });
});

module.exports = router;