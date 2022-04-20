const BlogPost = require('../models/BlogPost')

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({}).limit(30).sort({_id: -1})
    console.log(req.session)
    res.render('journals', {
        blogposts
    })
}