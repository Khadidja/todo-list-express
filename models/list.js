var mongoose = require("mongoose"),
    moment = require("moment");

var ListSchema = new mongoose.Schema({
    title: String,
    created: { type: Date, default: Date.now },
    user: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" } },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
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