const mongoose = require('mongoose')
const songSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    url : {
        type : String,
        required : true
    },
    artistName : {
        type : String,
        required : true
    },
    imgUrl : {
        type : String,
        required : true
    },
    description : {
        type : String,
    }
})
const songModel = mongoose.model('Song', songSchema)
module.exports = {songModel}

