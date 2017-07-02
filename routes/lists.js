var express = require('express'),
    router = express.Router(),
    List = require('../models/list');

/* GET all lists. */
router.get('/', function(req, res) {
    List.find({}, function(err, lists) {
        if (err) {
            res.send(err);
        } else {
            res.render('./lists/index', { title: 'My Lists', lists: lists });
        }
    });
});

/* POST to create a list */
router.post("/", function(req, res) {
    List.create(req.body.list, function(err, list) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists");
        }
    });
});


/* GET a list by id */
router.get("/:id", function(req, res) {
    List.findById(req.params.id).populate("items").exec(function(err, list) {
        if (err) {
            console.log(err);
        } else {
            res.render("./lists/show", { customStylesheet: "list.css", list: list });
        }
    });
});

/* GET a list by id to edit */
router.get("/:id/edit", function(req, res) {
    List.findById(req.params.id, function(err, list) {
        if (err) {
            console.log(err);
        } else {
            res.render("./lists/edit", { list: list });
        }
    });
});

/* PUT to update list by id */
router.put("/:id", function(req, res) {
    List.findByIdAndUpdate(req.params.id, req.body.list, function(err, list) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

/* DELETE list by id */
router.delete("/:id", function(req, res) {
    List.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists");
        }
    });
});

module.exports = router;