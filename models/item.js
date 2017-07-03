var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
    title: String,
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    listId: { type: mongoose.Schema.Types.ObjectId, ref: "List" }
});

module.exports = mongoose.model("Item", ItemSchema);