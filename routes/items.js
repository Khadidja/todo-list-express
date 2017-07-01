var express = require('express'),
    router = express.Router({ mergeParams: true }),
    List = require('../models/list'),
    Item = require("../models/item");

/* GET new item form */
router.get('/new', function(req, res) {
    List.findById(req.params.id).populate("items").exec(function(err, list) {
        if (err) {
            res.send(err);
        } else {
            res.render("./items/new", { list: list });
        }
    });
});

/* POST to create item */
router.post("/", function(req, res) {
    List.findById(req.params.id, function(err, list) {
        Item.create(req.body.item, function(err, item) {
            if (err) {
                res.send(err);
            } else {
                list.items.push(item);
                list.save();
                res.redirect(list.url);
            }
        });
    });
});

module.exports = router;