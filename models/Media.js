const { model, Schema } = require('mongoose')

const Media = new Schema ({
    title: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imdbID:  {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String
    },
    poster: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = model('Media', Media)