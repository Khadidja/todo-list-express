var mongoose = require("mongoose"),
    moment = require("moment"),
    Item = require("./item");

var ListSchema = new mongoose.Schema({
    title: String,
    created: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

ListSchema
    .virtual('created_formatted')
    .get(function() {
        return moment(this.created).format("dddd, MMMM Do YYYY, h:mm a");
    });

ListSchema
    .virtual("created_time_from_now")
    .get(function() {
        return moment(this.created).fromNow();
    });

ListSchema
    .virtual('url')
    .get(function() {
        return '/lists/' + this._id;
    });

module.exports = mongoose.model("List", ListSchema);