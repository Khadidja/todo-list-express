var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TO-DO List' });
});

/* GET sign up page */
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

/* POST user sign up */
router.post('/signup', function(req, res, next) {
    res.send("Post sign up");
});

/* GET log in page */
router.get('/login', function(req, res, next) {
    res.send("Log in page");
});

/* POST user log in */
router.get('/login', function(req, res, next) {
    res.send("Post log in page");
});

/* GET log out */
router.get('/logout', function(req, res, next) {
    res.send("Log out");
});

module.exports = router;