const BlogPost = require('../models/BlogPost')
const Project = require('../models/Project')
const Reviews = require('../models/Review')

module.exports = async (req, res) => {
    const blogpost = await BlogPost.find({}).limit(1).sort({_id: -1})
    const reviews = await Reviews.find({}).limit(4).sort({_id: -1})
    const projects = await Project.find({}).limit(1).sort({_id: -1})
    res.render('index', {
        blogpost, projects, reviews
    })
}