const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    title: {
        type: String,
        unique: true
    },
    email: String,
    message: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
})

const Project = mongoose.model('Project', ProjectSchema)
module.exports = Project