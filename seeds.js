var mongoose = require("mongoose"),
    List = require("./models/list");

var lists = [{ title: "List One" }, { title: "List Two" }, { title: "List Three" }];

module.exports = function() {
    List.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            lists.forEach(function(seed) {
                List.create(seed, function(err, list) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(list);
                    }
                });
            });
        }
    });
};