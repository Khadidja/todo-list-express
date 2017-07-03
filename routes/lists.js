var express = require('express'),
    router = express.Router(),
    List = require('../models/list'),
    Item = require("../models/item");

/* GET all lists. */
router.get('/', function(req, res) {
    List.find({ user: req.user._id }, function(err, lists) {
        if (err) {
            res.send(err);
        } else {
            console.log("Get all my lists:", lists);
            res.render('./lists/index', { title: 'My Lists', lists: lists });
        }
    });
});

/* POST to create a list */
router.post("/", function(req, res) {
    var newList = new List({
        title: req.body.list.title,
        user: req.user.id
    });
    List.create(newList, function(err, list) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists");
        }
    });
});


/* GET a list by id */
router.get("/:id", function(req, res) {
    List.findById(req.params.id, function(err, list) {
        if (err) {
            console.log(err);
        } else {
            Item.find({ listId: list.id }, function(err, items) {
                if (err) {
                    res.send(err);
                } else {
                    res.render("./lists/show", {
                        customStylesheet: "list.css",
                        customScript: "list.js",
                        list: list,
                        items: items
                    });
                }
            });
        }
    });
});

/* GET a list by id to edit */
router.get("/:id/edit", function(req, res) {
    List.findById(req.params.id).populate("items").exec(function(err, list) {
        if (err) {
            console.log(err);
        } else {
            res.render("./lists/edit", { customStylesheet: "list.css", customScript: "list.js", list: list });
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
    List.findByIdAndRemove(req.params.id, function(err, removedList) {
        if (err) {
            res.send(err);
        } else {
            console.log("removed list:", removedList);
            removedList.remove();
            res.redirect("/lists");
        }
    });
});

module.exports = router;