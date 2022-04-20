const Project = require('../models/Project')

module.exports = async (req, res) => {
    const projects = await Project.find({}).limit(40).sort({_id: -1})
    console.log(req.session)
    res.render('projects', {
        projects
    })
}