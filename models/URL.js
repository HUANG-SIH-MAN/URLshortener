const mongoose = require('mongoose')
const schema = mongoose.Schema
const URLschema = new schema({
    "orignURL": {
        type: String,
        require: true
    },
    "shortURL": {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('URL', URLschema)