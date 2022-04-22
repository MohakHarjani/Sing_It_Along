const mongoose = require('mongoose')
const artistSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String }
})
const artistModel = mongoose.model('Artist', artistSchema);
module.exports = { artistModel }