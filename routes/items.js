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
            res.render("./items/new", { title: "New Item", list: list });
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

/* GET edit form */
router.get("/:itemId/edit", function(req, res) {
    Item.findById(req.params.itemId, function(err, item) {
        if (err) {
            res.send(err);
        } else {
            res.render("./items/edit", { titie: "Edit Item", listId: req.params.id, item: item });
        }
    });
});

/* PUT item updates */
router.put("/:itemId", function(req, res) {
    Item.findByIdAndUpdate(req.params.itemId, req.body.item, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

/* DELETE item */
router.delete("/:itemId", function(req, res) {
    Item.findByIdAndRemove(req.params.itemId, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/lists/" + req.params.id);
        }
    });
});

module.exports = router;