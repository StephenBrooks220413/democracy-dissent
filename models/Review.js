const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    rating: String,
    yourName: String,
    url: String
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review