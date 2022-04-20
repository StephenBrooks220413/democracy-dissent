const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: {
        type: String,
        required: true
    },
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
module.exports = BlogPost