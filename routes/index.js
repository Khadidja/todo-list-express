var express = require('express'),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

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
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            return res.send(err);
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/lists");
        });
    });
});

/* GET log in page */
router.get('/login', function(req, res, next) {
    res.render("login");
});

/* POST user log in */
router.post("/login", passport.authenticate("local", {
    successRedirect: "/lists",
    failureRedirect: "/login"
}), function(req, res) {});

/* GET log out */
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


module.exports = router;