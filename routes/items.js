var express = require('express'),
    router = express.Router({ mergeParams: true }),
    List = require('../models/list'),
    Item = require("../models/item"),
    middleware = require("../middleware");

/* POST to create item */
router.post("/", middleware.isLoggedIn, function(req, res) {
    var item = new Item({
        title: req.body.item.title,
        listId: req.params.id
    });
    Item.create(item, function(err, item) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

/* PUT item updates */
router.put("/:itemId", middleware.isLoggedIn, function(req, res) {
    if (req.body.item.completed) {
        req.body.item.completed = req.body.item.completed === "true" ? false : true;
    }
    Item.findByIdAndUpdate(req.params.itemId, req.body.item, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

/* DELETE item */
router.delete("/:itemId", middleware.isLoggedIn, function(req, res) {
    Item.findByIdAndRemove(req.params.itemId, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

module.exports = router;