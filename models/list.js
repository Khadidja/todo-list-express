var mongoose = require("mongoose");

var ListSchema = new mongoose.Schema({
    title: String,
    created: { type: Date, default: Date.now },
    user: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" } },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});


module.exports = mongoose.model("List", ListSchema);