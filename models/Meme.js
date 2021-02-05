const mongoose = require('mongoose');

const memeSchema = mongoose.Schema( {
    name: String,
    url: String,
    caption: String,
    date: { type: String, default: Date.now }
}, { toObject: { versionKey: false } });

// https://contactsunny.medium.com/hide-properties-of-mongoose-objects-in-node-js-json-responses-a5437a5dbec2
memeSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
}

module.exports = mongoose.model('Meme', memeSchema);